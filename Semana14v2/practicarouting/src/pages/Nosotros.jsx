import { useState } from "react";
import { Link } from "react-router-dom";
function Nosotros() {
   
  const [valor,sertValor] = useState(1);

  return (
    <>
   <h2>Nosotros</h2>
    <Link to={`/nosotros/${valor}`}>Ver detalle</Link>
   </>
  )
}

export default Nosotros