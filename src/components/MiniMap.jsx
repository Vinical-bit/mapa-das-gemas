import mapa from '../data/brasil-uf.json';
import Crystal, { CrystalFilterDefs } from './Crystal.jsx';

// Mini-mapa decorativo: a lista de estados ao lado traz a mesma informação em texto.
export default function MiniMap({ ufs, cor }) {
  return (
    <svg className="minimapa" viewBox={`0 0 ${mapa.largura} ${mapa.altura}`} aria-hidden="true">
      <CrystalFilterDefs />
      {mapa.estados.map((e) => (
        <path key={e.sigla} d={e.d} className={'uf' + (ufs.includes(e.sigla) ? ' destaque' : '')} style={ufs.includes(e.sigla) ? { '--brilho': cor } : undefined} />
      ))}
      {mapa.estados.filter((e) => ufs.includes(e.sigla)).map((e) => (
        <Crystal key={e.sigla} x={e.cx} y={e.cy} size={22} color={cor} className="cristal-mapa" />
      ))}
    </svg>
  );
}
