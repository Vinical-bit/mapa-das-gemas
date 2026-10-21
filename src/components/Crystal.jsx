// Pequeno cristal facetado em SVG, usado no mapa e no mini-mapa.
export default function Crystal({ x, y, size, color, delay = 0, className = 'cristal-mapa' }) {
  return (
    <g className={className} transform={`translate(${x} ${y}) scale(${size})`} style={{ animationDelay: `${delay}s` }}>
      <path d="M0 -1 L.55 -.35 L.42 .75 L-.42 .75 L-.55 -.35Z" fill={color} filter="url(#brilho-cristal)" />
      <path d="M0 -1 L.55 -.35 L.42 .75 L-.42 .75 L-.55 -.35Z" fill={color} stroke="rgba(255,255,255,.7)" strokeWidth=".06" />
      <path d="M0 -1 L-.55 -.35 L-.1 .1Z" fill="#fff" opacity=".55" />
      <path d="M0 -1 L.08 .2 L.42 .75 L.55 -.35Z" fill="#000" opacity=".18" />
    </g>
  );
}

export function CrystalFilterDefs() {
  return (
    <defs>
      <filter id="brilho-cristal" x="-150%" y="-150%" width="400%" height="400%">
        <feGaussianBlur stdDeviation=".35" />
      </filter>
    </defs>
  );
}

// Distribui n cristais em fileiras de até 3, centradas no estado.
export function posicoesCristais(cx, cy, n, espaco) {
  const porFila = Math.min(3, n);
  const filas = Math.ceil(n / porFila);
  return Array.from({ length: n }, (_, i) => {
    const fila = Math.floor(i / porFila);
    const naFila = fila === filas - 1 ? n - fila * porFila : porFila;
    const col = i % porFila;
    return {
      x: cx + (col - (naFila - 1) / 2) * espaco + (fila % 2 ? espaco * 0.15 : 0),
      y: cy - 6 + (fila - (filas - 1) / 2) * espaco * 0.95 + (col % 2 ? 5 : 0),
    };
  });
}
