import { useState } from 'react';

function Acceso() {
  const [sesionIniciada, setSesionIniciada] = useState(false);

  return (
    <section>
      {sesionIniciada
        ? <p>Bienvenido al sistema.</p>
        : <p>Inicia sesión para continuar.</p>}

      <button onClick={() => setSesionIniciada(!sesionIniciada)}>
        Cambiar estado
      </button>
    </section>
  );
}

export default Acceso