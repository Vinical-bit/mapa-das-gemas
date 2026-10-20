import { useSyncExternalStore } from 'react';
import mapa from '../data/brasil-uf.json';
import { ESTADOS, gemasPorUf } from '../data/index.js';
import Crystal, { CrystalFilterDefs, posicoesCristais } from './Crystal.jsx';

// Estados pequenos demais para os cristais em tamanho normal.
const PEQUENOS = new Set(['AL', 'DF', 'ES', 'PB', 'RJ', 'RN', 'SE']);
// siglas empurradas para o mar, à direita dos cristais
const DIREITA = { RN: 30, PB: 34, ES: 26 };

// No celular o mapa encolhe ~3x: os cristais e as siglas crescem para continuarem visíveis.
const CELULAR = '(max-width: 599px)';
const assinar = (cb) => {
  const mq = window.matchMedia(CELULAR);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
};

export default function BrazilMap({ ufSelecionada, onSelecionar }) {
  const celular = useSyncExternalStore(assinar, () => window.matchMedia(CELULAR).matches, () => false);
  const k = celular ? 1.6 : 1;
  const comGemas = mapa.estados.filter((e) => gemasPorUf[e.sigla]);

  function rotulo(sigla) {
    const nomes = gemasPorUf[sigla].map((g) => g.nome).join(', ');
    return `${ESTADOS[sigla]}: ${nomes}`;
  }

  function teclar(e, sigla) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelecionar(sigla);
    }
  }

  return (
    <figure className="mapa">
      <svg
        viewBox={`0 0 ${mapa.largura} ${mapa.altura}`}
        role="group"
        aria-label="Mapa do Brasil. Os estados com gemas são botões: escolha um para filtrar a vitrine."
      >
        <CrystalFilterDefs />
        {/* estados sem gema: só desenho */}
        <g aria-hidden="true">
          {mapa.estados.filter((e) => !gemasPorUf[e.sigla]).map((e) => (
            <path key={e.sigla} d={e.d} className="uf" />
          ))}
        </g>
        {/* estados com gema: botões */}
        {comGemas.map((e) => {
          const ativo = ufSelecionada === e.sigla;
          return (
            <g
              key={e.sigla}
              role="button"
              tabIndex={0}
              aria-pressed={ativo}
              aria-label={rotulo(e.sigla)}
              className={'uf-botao' + (ativo ? ' ativo' : '')}
              onClick={() => onSelecionar(e.sigla)}
              onKeyDown={(ev) => teclar(ev, e.sigla)}
            >
              <title>{rotulo(e.sigla)}</title>
              <path d={e.d} className="uf tem" />
              {PEQUENOS.has(e.sigla) && <circle cx={e.cx} cy={e.cy} r={17 * k} className="uf-alvo" />}
            </g>
          );
        })}
        {/* cristais e siglas por cima, sem capturar clique */}
        <g aria-hidden="true" pointerEvents="none">
          {comGemas.map((e) => {
            const gemas = gemasPorUf[e.sigla];
            const pequeno = PEQUENOS.has(e.sigla);
            return posicoesCristais(e.cx, e.cy, gemas.length, (pequeno ? 18 : 34) * k).map((p, i) => (
              <Crystal
                key={e.sigla + gemas[i].slug}
                x={p.x}
                y={p.y}
                size={(pequeno ? 13 : 22) * k}
                color={gemas[i].visual.brilho}
                delay={(e.cx + i * 97) % 3}
              />
            ));
          })}
          {mapa.estados.map((e) => (
            <text
              key={e.sigla}
              x={e.cx + (DIREITA[e.sigla] || 0) * k}
              y={e.cy + (gemasPorUf[e.sigla] && !PEQUENOS.has(e.sigla) ? 42 * k : 5)}
              className={'uf-sigla' + (gemasPorUf[e.sigla] ? ' tem' : '')}
              fontSize={gemasPorUf[e.sigla] ? 17 * k : 15}
              textAnchor="middle"
            >
              {e.sigla}
            </text>
          ))}
        </g>
      </svg>
      <figcaption className="sr-only">
        Estados com gemas neste mapa: {comGemas.map((e) => ESTADOS[e.sigla]).join(', ')}.
      </figcaption>
    </figure>
  );
}
