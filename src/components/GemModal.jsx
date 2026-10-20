import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ESTADOS } from '../data/index.js';
import GemViewer from './GemViewer.jsx';

// Modal de vidro com o resumo da gema. <dialog> nativo: Esc, foco preso
// e fundo inerte vêm do navegador. Fecha também com o X e clicando fora.
export default function GemModal({ gem, onFechar }) {
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d.open) d.showModal();
    document.documentElement.classList.add('travado');
    return () => {
      document.documentElement.classList.remove('travado');
      if (d.open) d.close();
    };
  }, []);

  function cancelar(e) {
    e.preventDefault(); // Esc: quem fecha é o onFechar (que também mexe na URL)
    onFechar();
  }

  function cliqueFora(e) {
    if (e.target === ref.current) onFechar();
  }

  const ocorr = gem.ocorrencias.filter((o) => o.status === 'confirmado');

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-titulo"
      onCancel={cancelar}
      onClick={cliqueFora}
      style={{ '--brilho': gem.visual.brilho }}
    >
      <div className="modal-vidro">
        <button type="button" className="fechar" onClick={onFechar} aria-label="Fechar">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
        </button>

        <GemViewer gem={gem} className="modal-pedra" />

        <div className="modal-texto">
          <p className="sobretitulo">{gem.tipo}</p>
          <h2 id="modal-titulo">{gem.nome}</h2>

          <dl className="ficha">
            <div><dt>Composição</dt><dd>{gem.formula.texto}</dd></div>
            <div><dt>Dureza (Mohs)</dt><dd>{gem.mohs.texto}</dd></div>
            <div>
              <dt>No Brasil</dt>
              <dd>{ocorr.map((o) => ESTADOS[o.uf]).join(', ')}</dd>
            </div>
          </dl>

          <p>{gem.resumo.texto}</p>
          <p className="curiosidade">
            <strong>Curiosidade:</strong> {gem.curiosidade.texto}
          </p>

          <div className="modal-acoes">
            <Link className="botao" to={`/gema/${gem.slug}`}>Saiba mais</Link>
            <button type="button" className="botao fantasma" onClick={onFechar}>Voltar ao mapa</button>
          </div>
          <p className="modal-fontes">Fontes de cada fato na página completa.</p>
        </div>
      </div>
    </dialog>
  );
}
