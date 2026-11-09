import Contador from './ContadorPagina';
import Saludo from './SaludoPagina';
import FormularioSimple from './FormularioSimple'
import Acceso from './Acceso';
function Main() {

  return (
    <>        
    <main id="inicio">
<Acceso/>
   <FormularioSimple/>
    <Saludo/>
    <Contador></Contador>
    <Contador></Contador>
    <p>
      Encuentra información sobre nuestros cursos,
      actividades académicas y oportunidades de aprendizaje.
    </p>

    <section id="cursos">      
      <h2 style={{ marginTop: '20px' }}>Nuestros cursos</h2>

      <article className="curso">
        <h3>Desarrollo Web Front End</h3>
        <p>Aprende HTML, CSS, JavaScript y React.</p>
      </article>

      <article className="curso">
        <h3>Fundamentos de Programación</h3>
        <p>Desarrolla tu lógica mediante JavaScript.</p>
      </article>

      <article className="curso">
        <h3>Fundamentos de Bases de Datos</h3>
        <p>Diseña bases de datos y realiza consultas SQL.</p>
      </article>
    </section>
  </main>
    </>
  )
}

export default Main