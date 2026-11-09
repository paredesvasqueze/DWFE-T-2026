import { useState } from 'react';
function Contador() {
const [contador, setContador] = useState(0);
const [mensaje, setMensaje] = useState('');

    function actualizarcontador()
    {
    setContador(contador+1);       
    contador>=9 ? setMensaje("Ganaste") :  setMensaje("Perdiste")            
    }         

  return (        
    <>        
    <h2>{mensaje} </h2>    
    <h2>{contador} </h2>
    <button onClick={actualizarcontador}>Aumentar Valor</button>       
     </>
  )
}

export default Contador