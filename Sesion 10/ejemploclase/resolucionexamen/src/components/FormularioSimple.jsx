import { useState } from 'react';

function FormularioSimple() {
  const [correo, setCorreo] = useState('');

  function enviar(evento) {
    evento.preventDefault();
    alert(`Correo registrado: ${correo}`);
  }

  return (
    <form onSubmit={enviar}>
      <label htmlFor="correo">Correo:</label>
      <input
        id="correo"
        type="email"   
        value={correo}     
        onChange={(e) => setCorreo(e.target.value  )}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormularioSimple