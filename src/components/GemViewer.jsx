import { useEffect, useRef, useState } from 'react';
import useReducedMotion from '../hooks/useReducedMotion.js';
import GemImage from './GemImage.jsx';

// Pedra 3D. O Three.js só é baixado aqui (import dinâmico), então a página
// inicial não carrega WebGL. Sem WebGL, mostra a imagem estática.
export default function GemViewer({ gem, className = '' }) {
  const canvasRef = useRef(null);
  const [estado, setEstado] = useState('carregando'); // carregando | 3d | imagem
  const [dica, setDica] = useState(true);
  const parado = useReducedMotion();

  useEffect(() => {
    let renderer = null;
    let cancelado = false;
    setEstado('carregando');
    import('../three/GemRenderer.js')
      .then(({ GemRenderer }) => {
        if (cancelado) return;
        try {
          renderer = new GemRenderer(canvasRef.current, gem, { reduce: parado, onInteract: () => setDica(false) });
          setEstado('3d');
        } catch {
          setEstado('imagem');
        }
      })
      .catch(() => !cancelado && setEstado('imagem'));
    return () => {
      cancelado = true;
      renderer?.dispose();
    };
  }, [gem, parado]);

  return (
    <div className={'pedra-3d ' + className} style={{ '--brilho': gem.visual.brilho }}>
      {estado === 'imagem' ? (
        <GemImage gem={gem} className="pedra-3d-img" alt={`Ilustração da ${gem.nome}`} />
      ) : (
        <>
          <canvas
            ref={canvasRef}
            tabIndex={0}
            role="img"
            aria-label={`${gem.nome} em 3D. Arraste ou use as setas do teclado para girar.`}
            className={estado === '3d' ? 'pronto' : ''}
          />
          {estado === '3d' && (
            <p className={'pedra-dica' + (dica ? '' : ' some')} aria-hidden="true">
              arraste para girar
            </p>
          )}
        </>
      )}
    </div>
  );
}
