import { Link,NavLink } from "react-router-dom";

export default function Menu() { 

   function claseactiva ( { isActive, isPending })
   {
    return isPending ? "pending" : isActive ? "active" : "";    
   }
   
  return (
    <nav>
      <NavLink  to="/" className={claseactiva} >Inicio</NavLink>
      <NavLink  to="/nosotros" className={claseactiva}>Nosotros</NavLink>
      <NavLink  to="/acerca" className={claseactiva}>Acerca de</NavLink>
    </nav>
  );
}
