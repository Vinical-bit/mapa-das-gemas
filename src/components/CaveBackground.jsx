import { useEffect, useRef } from 'react';
import { GEMS } from '../data/index.js';
import useReducedMotion from '../hooks/useReducedMotion.js';

// Interior de geodo: cristais nas bordas da tela, brilhando devagar.
// Canvas 2D leve; com prefers-reduced-motion é desenhado uma vez e fica parado.
const PALETA = [...new Set(GEMS.flatMap((g) => [g.visual.brilho, g.visual.c3]))];

function criarCristais(w, h) {
  const cristais = [];
  const s = Math.min(1, w / 900) * 0.6 + 0.4;
  const cor = () => PALETA[(Math.random() * PALETA.length) | 0];
  function aglomerado(bx, by, ang, n) {
    for (let i = 0; i < n; i++) {
      cristais.push({
        x: bx + (Math.random() - 0.5) * 70 * s,
        y: by + (Math.random() - 0.5) * 30 * s,
        a: ang + (Math.random() - 0.5) * 0.9,
        len: (40 + Math.random() * 110) * s,
        wid: (8 + Math.random() * 14) * s,
        col: cor(),
        ph: Math.random() * 6.28,
        sp: 0.5 + Math.random() * 0.8,
      });
    }
  }
  const passo = Math.max(110, w / 7);
  for (let x = -20; x < w + 40; x += passo) aglomerado(x + Math.random() * 40, h + 10, -Math.PI / 2, 4);
  for (let y = 60; y < h; y += Math.max(170, h / 4)) {
    aglomerado(-10, y + Math.random() * 60, 0, 3);
    aglomerado(w + 10, y + Math.random() * 60, Math.PI, 3);
  }
  for (let x = 40; x < w; x += passo * 1.6) aglomerado(x + Math.random() * 60, -10, Math.PI / 2, 2);
  return cristais;
}

function desenhar(ctx, cristais, w, h, t, parado) {
  ctx.clearRect(0, 0, w, h);
  for (const c of cristais) {
    const brilho = parado ? 0.7 : 0.5 + 0.3 * Math.sin(t * c.sp + c.ph);
    const ca = Math.cos(c.a), sa = Math.sin(c.a), px = -sa, py = ca;
    const tipX = c.x + ca * c.len, tipY = c.y + sa * c.len;
    const shX = c.x + ca * c.len * 0.72, shY = c.y + sa * c.len * 0.72;
    const hw = c.wid / 2;
    ctx.save();
    ctx.globalAlpha = 0.7 * brilho;
    ctx.shadowColor = c.col;
    ctx.shadowBlur = 20 * brilho;
    const grd = ctx.createLinearGradient(c.x, c.y, tipX, tipY);
    grd.addColorStop(0, 'rgba(14,10,24,.9)');
    grd.addColorStop(0.55, c.col);
    grd.addColorStop(1, '#ffffff');
    ctx.fillStyle = grd;
    ctx.beginPath();
    ctx.moveTo(c.x + px * hw, c.y + py * hw);
    ctx.lineTo(shX + px * hw, shY + py * hw);
    ctx.lineTo(tipX, tipY);
    ctx.lineTo(shX - px * hw, shY - py * hw);
    ctx.lineTo(c.x - px * hw, c.y - py * hw);
    ctx.closePath();
    ctx.fill();
    // face clara de um lado: dá a ideia de faceta
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 0.3 * brilho;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(c.x, c.y);
    ctx.lineTo(shX, shY);
    ctx.lineTo(tipX, tipY);
    ctx.lineTo(shX + px * hw, shY + py * hw);
    ctx.lineTo(c.x + px * hw, c.y + py * hw);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

export default function CaveBackground() {
  const ref = useRef(null);
  const parado = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let cristais = [], w = 0, h = 0, raf = null, ultimo = 0;

    function montar() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cristais = criarCristais(w, h);
      desenhar(ctx, cristais, w, h, performance.now() / 1000, parado);
    }

    function loop(now) {
      raf = null;
      if (document.hidden) return;
      // ~30 quadros por segundo bastam para um brilho lento
      if (now - ultimo > 33) { desenhar(ctx, cristais, w, h, now / 1000, false); ultimo = now; }
      raf = requestAnimationFrame(loop);
    }
    const iniciar = () => { if (!parado && !raf && !document.hidden) raf = requestAnimationFrame(loop); };

    // só refaz os cristais quando a largura muda (no celular a barra de endereço muda a altura ao rolar)
    let larguraAnterior = window.innerWidth;
    const aoRedimensionar = () => {
      if (window.innerWidth !== larguraAnterior || Math.abs(window.innerHeight - h) > 160) {
        larguraAnterior = window.innerWidth;
        montar();
      }
    };

    montar();
    iniciar();
    window.addEventListener('resize', aoRedimensionar);
    document.addEventListener('visibilitychange', iniciar);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', aoRedimensionar);
      document.removeEventListener('visibilitychange', iniciar);
    };
  }, [parado]);

  return <canvas ref={ref} className="caverna" aria-hidden="true" />;
}
