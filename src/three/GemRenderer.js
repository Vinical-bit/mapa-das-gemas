import { WebGLRenderer, Scene, PerspectiveCamera, Mesh, Group, ShaderMaterial, Color, BackSide, FrontSide } from 'three';
import { VERT, FRAG } from './shaders.js';
import { gemGeometry } from './gemGeometry.js';

// Só existe UM contexto WebGL por vez: criar um novo descarta o anterior.
let ativo = null;

function material(v, back) {
  return new ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    side: back ? BackSide : FrontSide,
    transparent: !back,
    depthWrite: back,
    uniforms: {
      c1: { value: new Color(v.c1) },
      c2: { value: new Color(v.c2) },
      c3: { value: new Color(v.c3) },
      glow: { value: new Color(v.brilho) },
      fire: { value: v.fogo },
      time: { value: 0 },
      seed: { value: v.forma.semente || 1 },
      back: { value: back ? 1 : 0 },
    },
  });
}

function montarPedra(gem) {
  const geo = gemGeometry(gem.visual.forma);
  const grupo = new Group();
  const tras = new Mesh(geo, material(gem.visual, true));
  const frente = new Mesh(geo, material(gem.visual, false));
  tras.renderOrder = 0;
  frente.renderOrder = 1;
  grupo.add(tras, frente);
  // enquadra pela altura da pedra
  const raio = geo.boundingSphere.radius;
  return { grupo, geo, mats: [tras.material, frente.material], raio };
}

function distanciaCamera(raio, fov) {
  return (raio * 1.18) / Math.sin(((fov / 2) * Math.PI) / 180);
}

export class GemRenderer {
  constructor(canvas, gem, { reduce = false, onInteract } = {}) {
    if (ativo) ativo.dispose();
    ativo = this;

    this.canvas = canvas;
    this.reduce = reduce;
    this.onInteract = onInteract;
    this.disposed = false;

    // lança erro se o navegador não tiver WebGL (quem chama mostra a imagem estática)
    this.renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(30, 1, 0.1, 100);

    const pedra = montarPedra(gem);
    this.pedra = pedra;
    this.scene.add(pedra.grupo);
    this.camera.position.set(0, 0, distanciaCamera(pedra.raio, 30));

    this.rotX = 0.15; this.rotY = 0.5; this.velX = 0; this.velY = 0;
    this.dragging = false; this.visible = true; this.raf = null; this.t0 = performance.now();

    this._bind();
    this.resize();
    this.kick();
  }

  _bind() {
    const c = this.canvas;
    this._down = (e) => {
      this.dragging = true; this.lastX = e.clientX; this.lastY = e.clientY; this.velX = this.velY = 0;
      c.setPointerCapture?.(e.pointerId);
      this.onInteract?.();
      this.kick();
    };
    this._move = (e) => {
      if (!this.dragging) return;
      const dx = e.clientX - this.lastX, dy = e.clientY - this.lastY;
      this.lastX = e.clientX; this.lastY = e.clientY;
      this.velY = dx * 0.01; this.velX = dy * 0.01;
      this.rotY += this.velY; this.rotX += this.velX;
      this.kick();
    };
    this._up = () => { this.dragging = false; this.kick(); };
    this._key = (e) => {
      const passo = { ArrowLeft: [0, -0.25], ArrowRight: [0, 0.25], ArrowUp: [-0.2, 0], ArrowDown: [0.2, 0] }[e.key];
      if (!passo) return;
      e.preventDefault();
      this.rotX += passo[0]; this.rotY += passo[1];
      this.onInteract?.();
      this.kick();
    };
    c.addEventListener('pointerdown', this._down);
    c.addEventListener('pointermove', this._move);
    c.addEventListener('pointerup', this._up);
    c.addEventListener('pointercancel', this._up);
    c.addEventListener('keydown', this._key);

    this._ro = new ResizeObserver(() => this.resize());
    this._ro.observe(c);
    this._io = new IntersectionObserver((es) => { this.visible = es[0].isIntersecting; this.kick(); }, { threshold: 0.05 });
    this._io.observe(c);
    this._vis = () => this.kick();
    document.addEventListener('visibilitychange', this._vis);
  }

  resize() {
    if (this.disposed) return;
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    // canvas mais estreito que alto: afasta a câmera para a pedra caber na largura
    const base = distanciaCamera(this.pedra.raio, 30);
    this.camera.position.z = w < h * 0.7 ? base * ((h * 0.7) / w) : base;
    this.camera.updateProjectionMatrix();
    this.render(performance.now());
  }

  render(now) {
    if (this.disposed) return;
    const t = (now - this.t0) / 1000;
    const g = this.pedra.grupo;
    g.rotation.set(this.rotX, this.rotY, 0);
    g.position.y = this.reduce ? 0 : Math.sin(t * 1.1) * 0.05;
    for (const m of this.pedra.mats) m.uniforms.time.value = this.reduce ? 0 : t;
    this.renderer.render(this.scene, this.camera);
  }

  kick() {
    if (!this.disposed && !this.raf) this.raf = requestAnimationFrame((n) => this._loop(n));
  }

  _loop(now) {
    this.raf = null;
    if (this.disposed || !this.visible || document.hidden) return;
    if (!this.dragging) {
      this.rotY += this.velY; this.rotX += this.velX;
      this.velY *= 0.94; this.velX *= 0.94;
      // giro automático só sem prefers-reduced-motion
      if (!this.reduce && Math.abs(this.velY) < 0.002) this.rotY += 0.005;
    }
    this.rotX = Math.max(-1.3, Math.min(1.3, this.rotX));
    this.render(now);
    const mexendo = this.dragging || Math.abs(this.velY) > 0.0005 || Math.abs(this.velX) > 0.0005;
    if (!this.reduce || mexendo) this.kick();
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    if (this.raf) cancelAnimationFrame(this.raf);
    const c = this.canvas;
    c.removeEventListener('pointerdown', this._down);
    c.removeEventListener('pointermove', this._move);
    c.removeEventListener('pointerup', this._up);
    c.removeEventListener('pointercancel', this._up);
    c.removeEventListener('keydown', this._key);
    this._ro.disconnect();
    this._io.disconnect();
    document.removeEventListener('visibilitychange', this._vis);
    this.pedra.geo.dispose();
    this.pedra.mats.forEach((m) => m.dispose());
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    if (ativo === this) ativo = null;
  }
}

// Renderiza um quadro parado e devolve uma imagem WebP (usado para gerar as miniaturas da grade).
export function renderizarImagem(gem, tamanho = 320) {
  if (ativo) ativo.dispose();
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = tamanho;
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(tamanho, tamanho, false);
  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 100);
  const pedra = montarPedra(gem);
  scene.add(pedra.grupo);
  camera.position.set(0, 0, distanciaCamera(pedra.raio, 30) * 0.92);
  pedra.grupo.rotation.set(0.15, 0.5, 0);
  for (const m of pedra.mats) m.uniforms.time.value = 0;
  renderer.render(scene, camera);
  const url = canvas.toDataURL('image/webp', 0.9);
  pedra.geo.dispose();
  pedra.mats.forEach((m) => m.dispose());
  renderer.dispose();
  renderer.forceContextLoss();
  return url;
}
