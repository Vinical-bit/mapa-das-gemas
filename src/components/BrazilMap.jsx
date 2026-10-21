import { useSyncExternalStore } from 'react';
import mapa from '../data/brasil-uf.json';
import { ESTADOS, gemasPorUf } from '../data/index.js';
import Crystal, { CrystalFilterDefs, posicoesCristais } from './Crystal.jsx';

// Estados pequenos demais para os cristais em tamanho normal.
const PEQUENOS = new Set(['AL', 'DF', 'ES', 'PB', 'RJ', 'RN', 'SE']);
// siglas empurradas para o mar, à direita dos cristais
const DIREITA = { RN: 34, PB: 38, ES: 30 };

// Estados com muitas gemas mostram até 6 cristais (3 nos pequenos; no celular, 3 e 2), cores
// diferentes primeiro, e um "+N" com o resto. O nome completo vai no aria-label.
function cristaisDoEstado(sigla, celular) {
  const pequeno = PEQUENOS.has(sigla);
  const vistas = new Set(), primeiro = [], depois = [];
  for (const g of gemasPorUf[sigla]) {
    (vistas.has(g.visual.brilho) ? depois : primeiro).push(g);
    vistas.add(g.visual.brilho);
  }
  const todas = [...primeiro, ...depois];
  const max = celular ? (pequeno ? 2 : 3) : pequeno ? 3 : 6;
  return { pequeno, mostradas: todas.slice(0, max), extra: Math.max(0, todas.length - max) };
}

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
  const info = Object.fromEntries(comGemas.map((e) => [e.sigla, cristaisDoEstado(e.sigla, celular)]));

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
            const { mostradas, pequeno } = info[e.sigla];
            const espaco = (pequeno ? 18 : 34) * k;
            return posicoesCristais(e.cx, e.cy, mostradas.length, espaco).map((p, i) => (
              <Crystal
                key={e.sigla + mostradas[i].slug}
                x={p.x}
                y={p.y}
                size={(pequeno ? 13 : 22) * k}
                color={mostradas[i].visual.brilho}
                delay={(e.cx + i * 97) % 3}
              />
            ));
          })}
          {mapa.estados.map((e) => {
            const i = info[e.sigla];
            const filas = i ? Math.ceil(i.mostradas.length / 3) : 0;
            return (
              <text
                key={e.sigla}
                x={e.cx + (DIREITA[e.sigla] || 0) * k}
                y={e.cy + (i && !i.pequeno ? (filas > 1 ? 60 : 42) * k : 5)}
                className={'uf-sigla' + (i ? ' tem' : '')}
                fontSize={i ? 17 * k : 15}
                textAnchor={DIREITA[e.sigla] ? 'start' : 'middle'}
              >
                {e.sigla}
                {i?.extra > 0 && <tspan className="uf-extra"> +{i.extra}</tspan>}
              </text>
            );
          })}
        </g>
      </svg>
      <figcaption className="sr-only">
        Estados com gemas neste mapa: {comGemas.map((e) => ESTADOS[e.sigla]).join(', ')}.
      </figcaption>
    </figure>
  );
}
