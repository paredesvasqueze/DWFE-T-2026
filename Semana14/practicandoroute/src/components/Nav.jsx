
import { Link,NavLink} from "react-router-dom";
function Nav() {
  return (
    <nav>
        <Link to={"/"}>Inicio</Link>|
        <Link to={"/nosotros"}>Nosotros</Link>|
        <Link to={"/contacto"}>Contacto</Link>|
    </nav>    
  )
}
export default Nav