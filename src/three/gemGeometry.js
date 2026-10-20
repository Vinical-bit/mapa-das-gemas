import { IcosahedronGeometry } from 'three';

// Pedra irregular e facetada: um icosaedro com cada vértice empurrado
// por um ruído determinístico (a "semente" deixa cada gema com sua cara).
export function gemGeometry(forma) {
  const f = {
    detalhe: 1, largura: 1, alongamento: 1.4, profundidade: 0.85,
    ponta: 0.3, irregularidade: 0.12, semente: 1, ...forma,
  };
  const geo = new IcosahedronGeometry(1, f.detalhe);
  const pos = geo.attributes.position;

  // vértices repetidos precisam receber o mesmo deslocamento, senão a malha abre
  function hash(x, y, z) {
    const s = Math.sin(Math.round(x * 1e4) * 12.9898 + Math.round(y * 1e4) * 78.233 + Math.round(z * 1e4) * 37.719 + f.semente) * 43758.5453;
    return s - Math.floor(s);
  }

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const l = Math.hypot(x, y, z);
    x /= l; y /= l; z /= l;
    const r = 1 + f.irregularidade * (hash(x, y, z) - 0.5) + 0.06 * Math.sin(x * 3.1 + z * 2.3 + f.semente);
    let nx = x * r, ny = y * r, nz = z * r;
    if (ny > 0) { const k = 1 - f.ponta * ny * ny; nx *= k; nz *= k; }
    nx *= f.largura; ny *= f.alongamento; nz *= f.profundidade;
    pos.setXYZ(i, nx, ny, nz);
  }
  geo.computeBoundingSphere();
  return geo;
}
