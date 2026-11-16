import { useNavigate, useParams } from "react-router-dom"

function Detalle() {
    const valores = useParams();
    const navigate = useNavigate();
    
    function volveratras()
    {
       navigate(-1) ;
    }
    
  return (
    <>
    <div>Detalle de producto {valores.id}</div>
    <button onClick={volveratras}>Atras</button>
    </>
  )}


export default Detalle