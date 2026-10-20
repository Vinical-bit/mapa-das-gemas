import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="rodape">
      <p>
        Malha territorial dos estados:{' '}
        <a href="https://servicodados.ibge.gov.br/api/docs/malhas?versao=3" target="_blank" rel="noopener noreferrer">
          IBGE, API de Malhas Territoriais
        </a>
        . Lista inicial de gemas inspirada no painel do Museu de Geociências da USP.
      </p>
      <p>
        Cada fato tem fonte na página da gema. O que ainda não foi confirmado está em{' '}
        <Link to="/a-verificar">A verificar</Link>. Pedras ilustradas em código: nenhuma foto.
      </p>
    </footer>
  );
}
