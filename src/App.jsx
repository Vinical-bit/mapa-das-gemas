import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CaveBackground from './components/CaveBackground.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

const GemPage = lazy(() => import('./pages/GemPage.jsx'));
const AVerificar = lazy(() => import('./pages/AVerificar.jsx'));
const DevMiniaturas = import.meta.env.DEV ? lazy(() => import('./pages/DevMiniaturas.jsx')) : null;

function RolarParaTopo() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <CaveBackground />
      <RolarParaTopo />
      <a className="pular" href="#conteudo" onClick={(e) => { e.preventDefault(); document.getElementById('conteudo')?.focus(); }}>
        Pular para o conteúdo
      </a>
      <Suspense fallback={<p className="carregando" role="status">Carregando…</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gema/:slug" element={<GemPage />} />
          <Route path="/a-verificar" element={<AVerificar />} />
          {DevMiniaturas && <Route path="/dev/miniaturas" element={<DevMiniaturas />} />}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
