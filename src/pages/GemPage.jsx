import { Link, useParams } from 'react-router-dom';
import { GEMS, gemPorSlug, fontesDaGema, ESTADOS, ufsDaGema } from '../data/index.js';
import GemViewer from '../components/GemViewer.jsx';
import MiniMap from '../components/MiniMap.jsx';

// Molde único para todas as gemas. O que muda de uma para outra vem dos
// dados: textos, e os tokens de cor em "visual" (viram variáveis CSS).
export default function GemPage() {
  const { slug } = useParams();
  const gem = gemPorSlug[slug];

  if (!gem) {
    return (
      <main id="conteudo" tabIndex={-1} className="gema-pagina">
        <p className="voltar"><Link to="/">← Voltar ao mapa</Link></p>
        <h1>Gema não encontrada</h1>
        <p>Não existe uma gema com o endereço “{slug}”.</p>
      </main>
    );
  }

  const fontes = fontesDaGema(gem);
  const numero = Object.fromEntries(fontes.map((f, i) => [f.id, i + 1]));
  const ufs = ufsDaGema(gem);
  const i = GEMS.indexOf(gem);
  const anterior = GEMS[(i - 1 + GEMS.length) % GEMS.length];
  const proxima = GEMS[(i + 1) % GEMS.length];

  // [1][2] ao lado de cada fato, levando para a lista de fontes
  const Refs = ({ fato }) => (
    <>
      {fato.status === 'a-verificar' && <span className="selo-verificar">a verificar</span>}
      {fato.fontes?.map((id) => (
        <a key={id} className="ref" href={`#fonte-${id}`} onClick={(e) => { e.preventDefault(); document.getElementById(`fonte-${id}`)?.focus(); }} aria-label={`Fonte ${numero[id]}`}>
          [{numero[id]}]
        </a>
      ))}
    </>
  );

  const v = gem.visual;
  return (
    <main
      id="conteudo"
      tabIndex={-1}
      className="gema-pagina"
      style={{ '--brilho': v.brilho, '--gema-c1': v.c1, '--gema-c2': v.c2, '--gema-c3': v.c3 }}
    >
      <p className="voltar"><Link to="/">← Voltar ao mapa</Link></p>

      <header className="gema-hero">
        <GemViewer gem={gem} className="gema-pedra" />
        <div className="gema-hero-texto">
          <p className="sobretitulo">{gem.tipo}</p>
          <h1>{gem.nome}</h1>
          <p className="lead">{gem.resumo.texto} <Refs fato={gem.resumo} /></p>
        </div>
      </header>

      <div className="gema-colunas">
        <section className="painel" aria-labelledby="t-propriedades">
          <h2 id="t-propriedades">Propriedades</h2>
          <dl className="ficha grande">
            <div><dt>Composição química</dt><dd>{gem.formula.texto} <Refs fato={gem.formula} /></dd></div>
            <div>
              <dt>Dureza na escala de Mohs</dt>
              <dd>{gem.mohs.texto} <Refs fato={gem.mohs} />{gem.mohs.nota && <small>{gem.mohs.nota}</small>}</dd>
            </div>
            {gem.cor && <div><dt>Cor</dt><dd>{gem.cor.texto} <Refs fato={gem.cor} /></dd></div>}
          </dl>
        </section>

        <section className="painel" aria-labelledby="t-onde">
          <h2 id="t-onde">Onde aparece no Brasil</h2>
          <div className="onde">
            <MiniMap ufs={ufs} cor={v.brilho} />
            <ul className="onde-lista">
              {gem.ocorrencias.map((o) => (
                <li key={o.uf + o.local}>
                  <strong>{ESTADOS[o.uf]}</strong> — {o.local} <Refs fato={o} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section className="painel" aria-labelledby="t-historia">
        <h2 id="t-historia">História</h2>
        <div className="historia">
          {gem.historia.map((h, k) => (
            <p key={k}>{h.texto} <Refs fato={h} /></p>
          ))}
        </div>
      </section>

      <section className="painel" aria-labelledby="t-curiosidades">
        <h2 id="t-curiosidades">Curiosidades</h2>
        <ul className="curiosidades">
          {[gem.curiosidade, ...gem.curiosidades].map((c, k) => (
            <li key={k}>{c.texto} <Refs fato={c} /></li>
          ))}
        </ul>
      </section>

      {gem.aVerificar?.length > 0 && (
        <section className="painel painel-verificar" aria-labelledby="t-verificar">
          <h2 id="t-verificar">Ainda a verificar</h2>
          <p className="nota">Pistas que ainda não têm fonte confirmada. Elas não aparecem como fato no site.</p>
          <ul>
            {gem.aVerificar.map((a, k) => (
              <li key={k}><strong>{a.texto}</strong> {a.nota}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="painel" aria-labelledby="t-fontes">
        <h2 id="t-fontes">Fontes</h2>
        <ol className="fontes">
          {fontes.map((f) => (
            <li key={f.id} id={`fonte-${f.id}`} tabIndex={-1}>
              {f.autoria}. <a href={f.url} target="_blank" rel="noopener noreferrer">{f.titulo}</a>. {f.orgao}
              {f.ano ? `, ${f.ano}` : ''}.
              {f.tipo === 'complementar' && <span className="selo-complementar">fonte complementar</span>}
            </li>
          ))}
        </ol>
      </section>

      <nav className="gema-nav" aria-label="Outras gemas">
        <Link to={`/gema/${anterior.slug}`}>← {anterior.nome}</Link>
        <Link to="/">Mapa</Link>
        <Link to={`/gema/${proxima.slug}`}>{proxima.nome} →</Link>
      </nav>
    </main>
  );
}
