import { useState } from 'react';
import { urlMiniatura } from '../data/index.js';
import GemFallback from './GemFallback.jsx';

// Imagem estática da pedra (WebP gerado uma vez a partir do 3D).
export default function GemImage({ gem, className, alt }) {
  const [falhou, setFalhou] = useState(false);
  if (falhou) return <GemFallback gem={gem} className={className} />;
  return (
    <img
      className={className}
      src={urlMiniatura(gem.slug)}
      alt={alt ?? ''}
      width="256"
      height="256"
      loading="lazy"
      decoding="async"
      onError={() => setFalhou(true)}
    />
  );
}
