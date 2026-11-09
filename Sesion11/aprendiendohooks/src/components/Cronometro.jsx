import { useRef, useState } from "react"

function Cronometro(){
  const  [valor, setValor] = useState(0);
  const  [desabilitado, setDesabilitado] = useState(true);
  const interval = useRef(null);  
    function iniciar()
    {   
        if(interval.current != null) return;                   
            
        interval.current = setInterval(() => {
            setValor((anterior) => anterior +1);
         }, 1000);        
    } 

    function detener()
    {
      clearInterval(interval.current); 
      interval.current = null;
      setDesabilitado(true);
    }

    function reiniciar()
    {
        setValor(0);
        clearInterval(interval.current); 
        interval.current = null;
        setDesabilitado(true);
    }


     

    //clearInterval(id);

    return(
        <>
        <h1>{valor}</h1> 
        <button onClick={iniciar} disabled={!desabilitado} >Iniciar</button>
        <button onClick={detener} disabled={desabilitado} >Detener</button>
        <button onClick={reiniciar} disabled={desabilitado} >Reiniciar</button>
        </>
    )


}
export default Cronometro
