import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import { lazy, Suspense } from "react";

const Inicio = lazy(() => import("./pages/Inicio"));
const Productos = lazy(() => {
  console.log("Iniciando carga:", new Date().toLocaleTimeString());

  return new Promise((resolve) => {
    setTimeout(async () => {
      console.log("Han transcurrido 5 segundos");

      const modulo = await import("./pages/Productos");

      console.log("Componente descargado:", new Date().toLocaleTimeString());

      resolve(modulo);
    }, 5000);
  });
});

const Reportes = lazy(() => import("./pages/Reportes"));
import Menu from './components/Menu';

function App() {
  return (
    <>
    <Menu/>    
    <Suspense fallback={<p>Cargando página...</p>}>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Suspense>
    </>
  );
}

export default App
