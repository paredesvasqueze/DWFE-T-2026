function Nav(props) { 
let platos = props.menuss;
  return (
    <>
      <nav>
        <ul>
            <li><a href="#inicio">{platos[0].nombre}</a></li>
            <li><a href="#nosotros">{platos[1].nombre}</a></li>
            <li><a href="#servicios">{platos[2].nombre}</a></li>
            <li><a href="#contacto">{platos[3].nombre}</a></li>
        </ul>        
    </nav>
    </>
  )
}

export default Nav