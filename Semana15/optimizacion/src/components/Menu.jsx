import { Link,NavLink } from "react-router-dom";

export default function Menu() { 

   function claseactiva ( { isActive, isPending })
   {
    return isPending ? "pending" : isActive ? "active" : "";
    
   }
   
  return (
    <nav>
      <NavLink  to="/" className={claseactiva} >Inicio</NavLink>
      <NavLink  to="/productos" className={claseactiva}>Productos</NavLink>
      <NavLink  to="/reportes" className={claseactiva}>Reportes</NavLink>

    </nav>
  );
}