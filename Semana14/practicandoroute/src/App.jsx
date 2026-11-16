import './App.css'
import { Routes,Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Nav from './components/Nav';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Inicio/>}  />
      <Route path='/inicio' element={<Inicio/>}  />
      <Route path='/contacto' element={<Contacto/>}  />
      <Route path='/nosotros' element={<Nosotros/>}  />

    </Routes>
      
    </>
  )
}

export default App
