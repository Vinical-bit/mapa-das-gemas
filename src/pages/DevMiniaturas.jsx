import { useEffect, useState } from 'react';
import { GEMS } from '../data/index.js';
import { renderizarImagem } from '../three/GemRenderer.js';

// Só em desenvolvimento. Renderiza cada gema uma vez (um WebGL por vez)
// e expõe as imagens em window.__miniaturas para o script gerar-miniaturas.mjs.
export default function DevMiniaturas() {
  const [imagens, setImagens] = useState({});
  useEffect(() => {
    const out = {};
    for (const g of GEMS) out[g.slug] = renderizarImagem(g, 320);
    setImagens(out);
    window.__miniaturas = out;
  }, []);
  return (
    <main id="conteudo" className="gema-pagina">
      <h1>Miniaturas (dev)</h1>
      <div className="vitrine">
        {Object.entries(imagens).map(([slug, url]) => (
          <figure key={slug}><img src={url} alt={slug} width="256" height="256" /><figcaption>{slug}</figcaption></figure>
        ))}
      </div>
    </main>
  );
}
