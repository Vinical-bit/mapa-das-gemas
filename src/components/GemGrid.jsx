import { ufsDaGema } from '../data/index.js';
import GemImage from './GemImage.jsx';

export default function GemGrid({ gemas, onAbrir }) {
  if (!gemas.length) {
    return <p className="vazio">Nenhuma gema com esses filtros. Tente outro estado ou outra cor.</p>;
  }
  return (
    <ul className="vitrine" aria-label="Gemas">
      {gemas.map((g) => (
        <li key={g.slug}>
          <button
            type="button"
            className="vitrine-item"
            data-gema={g.slug}
            style={{ '--brilho': g.visual.brilho }}
            onClick={() => onAbrir(g.slug)}
            aria-haspopup="dialog"
          >
            <GemImage gem={g} className="vitrine-pedra" />
            <span className="vitrine-nome">{g.nome}</span>
            <span className="vitrine-ufs">{ufsDaGema(g).join(' · ')}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
