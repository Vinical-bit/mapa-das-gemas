// Pedra desenhada em SVG: aparece enquanto a miniatura não existe
// ou quando o navegador não tem WebGL e a imagem também falhou.
export default function GemFallback({ gem, className }) {
  const { c1, c2, c3, brilho } = gem.visual;
  const id = `fb-${gem.slug}`;
  return (
    <svg className={className} viewBox="0 0 120 160" role="img" aria-label={`Ilustração da ${gem.nome}`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c3} />
          <stop offset=".5" stopColor={c2} />
          <stop offset="1" stopColor={c1} />
        </linearGradient>
        <radialGradient id={id + 'g'}>
          <stop offset="0" stopColor={brilho} stopOpacity=".5" />
          <stop offset="1" stopColor={brilho} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="82" rx="58" ry="74" fill={`url(#${id}g)`} />
      <path d="M60 10 84 34 98 92 74 150 40 148 20 96 32 36Z" fill={`url(#${id})`} stroke="rgba(255,255,255,.55)" strokeWidth="1.2" />
      <path d="M60 10 32 36 46 78Z" fill="#fff" opacity=".35" />
      <path d="M60 10 84 34 70 76 46 78Z" fill="#fff" opacity=".12" />
      <path d="M98 92 74 150 70 76 84 34Z" fill="#000" opacity=".18" />
      <path d="M20 96 46 78 40 148Z" fill="#000" opacity=".1" />
    </svg>
  );
}
