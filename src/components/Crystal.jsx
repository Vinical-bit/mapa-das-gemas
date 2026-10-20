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

// Distribui n cristais em volta do centro do estado.
export function posicoesCristais(cx, cy, n, espaco) {
  return Array.from({ length: n }, (_, i) => ({
    x: cx + (i - (n - 1) / 2) * espaco,
    y: cy - 6 + (i % 2 ? 6 : 0),
  }));
}
