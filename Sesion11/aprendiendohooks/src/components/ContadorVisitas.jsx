import { useState, useEffect } from 'react'
function Contador() {
  const [valor, setValor] = useState(0)
  const [mensaje, setMensaje] = useState('')
  const [sesioniniciada, setSesionIniciada] = useState(false)

  function mostrarsaludo() {
    alert("Buenas Noches");
  }

  useEffect(
    () => {
          document.title = mensaje;
      
    }, [sesioniniciada]
  )
  return (
    <>
      <div className='contador'>
        <h2>{valor}</h2>
        <button onClick={() => { setValor(valor + 1) }} >Aumentar Valor</button>
        <button onClick={() => { setValor(valor - 1) }} >Disminuir Valor</button>
        <button onClick={mostrarsaludo} >Mostrar Saludo</button>
        <input
          value={mensaje}
          onChange={(e) => { setMensaje(e.target.value) }}
        />
        <h3>{mensaje}</h3>
        <h3>{mensaje}</h3>


        <form onSubmit={(e) => {
          e.preventDefault();
        }
        }>
          <label htmlFor='correo'>Ingrese Correo</label>
          <input id="correo" type='email' />
          <button type='submit'>Enviar Datos</button>
        </form>
        {
          sesioniniciada ?
            <h4>Inicia Sesion</h4> :
            <h4>Sesion Iniciada</h4>
        }
        <button onClick={() => { setSesionIniciada(!sesioniniciada) }}  >Cambiar</button>
      </div>
    </>
  )
}
export default Contador
