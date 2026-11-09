import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Panel from './components/PanelPagina'


function App() {
  const [count, setCount] = useState(0)

  let menus = [
    {nombre:"Inicio"},
    {nombre:"Nosotros"},
    {nombre:"Historia"},
    {nombre:"Contacito"}
  ];

  return (
    <>
     <Header></Header>
     <Nav menuss = {menus}>
      <h2>soy un hijo</h2>
      <h3>soy un nieto</h3>
      </Nav>          

      <Panel titulo="Aviso">
        <p>La práctica comienza ahora.</p>
      </Panel>
    </>
  )
}

export default App
