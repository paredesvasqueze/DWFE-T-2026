import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/HeaderPagina'
import Aside from './components/AsidePagina'
import Footer from './components/FooterPagina'
import Main from './components/MainPagina'
import Nav from './components/NavPagina'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    

    <>
     <Header></Header>
     <Nav></Nav>
     <Main></Main>
     <Aside></Aside>
     <Footer></Footer>
    </>
  )
}

export default App

