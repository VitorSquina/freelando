import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Estilos } from './componentes/EstilosGlobais/Estilos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Estilos />
      <h1>Freelando</h1>
    </>
  )
}

export default App
