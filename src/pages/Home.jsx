import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { gemPorSlug, filtrarGemas, ESTADOS, CORES } from '../data/index.js';
import BrazilMap from '../components/BrazilMap.jsx';
import Filters from '../components/Filters.jsx';
import GemGrid from '../components/GemGrid.jsx';
import GemModal from '../components/GemModal.jsx';

// Filtros e modal ficam na URL (#/?uf=MG&cor=roxo&gema=ametista):
// o link pode ser compartilhado e o "voltar" do celular fecha o modal.
export default function Home() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const ultimaAberta = useRef(null);

  const uf = ESTADOS[params.get('uf')] ? params.get('uf') : null;
  const cor = CORES[params.get('cor')] ? params.get('cor') : null;
  const gem = gemPorSlug[params.get('gema')] || null;
  const gemas = filtrarGemas({ uf, cor });

  const mudar = useCallback(
    (chave, valor, opcoes = { replace: true }) => {
      setParams(
        (p) => {
          const n = new URLSearchParams(p);
          if (valor) n.set(chave, valor); else n.delete(chave);
          return n;
        },
        opcoes
      );
    },
    [setParams]
  );

  function abrir(slug) {
    ultimaAberta.current = slug;
    mudar('gema', slug, { replace: false, state: { modal: true } });
  }

  function fechar() {
    if (location.state?.modal) navigate(-1);
    else mudar('gema', null);
  }

  // devolve o foco para a gema que abriu o modal
  useEffect(() => {
    if (!gem && ultimaAberta.current) {
      document.querySelector(`[data-gema="${ultimaAberta.current}"]`)?.focus();
      ultimaAberta.current = null;
    }
  }, [gem]);

  return (
    <main id="conteudo" tabIndex={-1} className="home">
      <header className="topo">
        <p className="sobretitulo">Gemas brasileiras, com fontes</p>
        <h1>Mapa das Gemas do Brasil</h1>
        <p className="lead">
          Onde estão as principais gemas brasileiras e qual a história de cada uma. Escolha um estado no mapa ou uma
          pedra na vitrine.
        </p>
      </header>

      <div className="home-grade">
        <section className="painel painel-mapa" aria-labelledby="titulo-mapa">
          <h2 id="titulo-mapa" className="painel-titulo">Onde estão</h2>
          <BrazilMap ufSelecionada={uf} onSelecionar={(s) => mudar('uf', s === uf ? null : s)} />
        </section>

        <section className="painel painel-vitrine" aria-labelledby="titulo-vitrine">
          <h2 id="titulo-vitrine" className="painel-titulo">Vitrine</h2>
          <Filters
            uf={uf}
            cor={cor}
            total={gemas.length}
            onUf={(v) => mudar('uf', v)}
            onCor={(v) => mudar('cor', v)}
          />
          <GemGrid gemas={gemas} onAbrir={abrir} />
        </section>
      </div>

      {gem && <GemModal key={gem.slug} gem={gem} onFechar={fechar} />}
    </main>
  );
}
