import { Estilos } from './componentes/EstilosGlobais/Estilos'
import { Card } from './componentes/Card/Card'
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProvedorTema>
    <Estilos />
      <Card>
        <h1>Freelando</h1>
      </Card> 
    </ProvedorTema>
  )
}

export default App
