import { Link } from 'react-router-dom';
import { listaAVerificar } from '../data/index.js';

// Gerada direto dos dados: tudo que está marcado como "a verificar".
export default function AVerificar() {
  const itens = listaAVerificar();
  return (
    <main id="conteudo" tabIndex={-1} className="gema-pagina">
      <p className="voltar"><Link to="/">← Voltar ao mapa</Link></p>
      <h1>A verificar</h1>
      <p className="lead">
        O site só mostra como fato o que tem fonte verificável. Abaixo estão as pistas e dúvidas que ainda não foram
        confirmadas.
      </p>
      <section className="painel">
        <ul className="lista-verificar">
          {itens.map((it, k) => (
            <li key={k}>
              <span className="lv-gema">{it.gem ? <Link to={`/gema/${it.gem.slug}`}>{it.gem.nome}</Link> : 'Geral'}</span>
              <strong>{it.texto}</strong>
              <span>{it.nota}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
