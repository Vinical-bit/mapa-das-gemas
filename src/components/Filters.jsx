import { ESTADOS, CORES, ufsComGemas, coresUsadas } from '../data/index.js';

export default function Filters({ uf, cor, onUf, onCor, total }) {
  const algum = uf || cor;
  return (
    <div className="filtros" role="search" aria-label="Filtrar gemas">
      <label className="filtro-estado">
        <span>Estado</span>
        <select value={uf || ''} onChange={(e) => onUf(e.target.value || null)}>
          <option value="">Todos os estados</option>
          {ufsComGemas.map((s) => (
            <option key={s} value={s}>{ESTADOS[s]} ({s})</option>
          ))}
        </select>
      </label>

      <fieldset className="filtro-cor">
        <legend>Cor</legend>
        <div className="chips">
          {coresUsadas.map((c) => (
            <button
              key={c}
              type="button"
              className="chip"
              aria-pressed={cor === c}
              onClick={() => onCor(cor === c ? null : c)}
            >
              <span className="amostra" style={{ background: CORES[c].amostra }} aria-hidden="true" />
              {CORES[c].nome}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="filtro-resumo" role="status" aria-live="polite">
        {total === 1 ? '1 gema' : `${total} gemas`}
        {uf && <> em {ESTADOS[uf]}</>}
        {cor && <> · {CORES[cor].nome.toLowerCase()}</>}
        {algum && (
          <button type="button" className="limpar" onClick={() => { onUf(null); onCor(null); }}>
            Limpar filtros
          </button>
        )}
      </p>
    </div>
  );
}
