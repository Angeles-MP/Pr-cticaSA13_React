import { useState } from 'react'
import './App.css'
import CatalogoProductos from './Componentes/CatalagoProductos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CatalogoProductos/>
    </>
  )
}

export default App
