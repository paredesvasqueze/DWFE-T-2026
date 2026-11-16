import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Acerca from "./pages/Acerca";
import Menu from './components/Menu';
import './App.css'
import Detalle from './pages/Detalle';
import LayoutPrincipal from './layouts/LayoutPrincipal';
import NoEncontrado from './pages/NoEncontrado'

function App() {

  return (
    <>
      {
      /*
    <Menu/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros/>} />
      <Route path="/acerca" element={<Acerca />} />
      <Route path="/detalle/:id" element={<Detalle />} />
    </Routes>
    */
      }

      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route
            path="nosotros/:id"
            element={<Detalle />}
          />
          <Route path="acerca" element={<Acerca />} />
        </Route>
        <Route path="*" element={<NoEncontrado />} />
      </Routes>

    </>

  )
}

export default App
