import { useState } from 'react';

function Saludo() {
  const [nombre, setNombre] = useState('');

  return (
    <section>
      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        value={nombre}
        onChange ={(evento) => 
        {            
            console.log(evento);
            setNombre(evento.target.value)
        }
            }
      />
      <p>Hola, {nombre || 'estudiante'}.</p>
    </section>
  );
}

export default Saludo