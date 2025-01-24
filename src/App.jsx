import { Estilos } from './componentes/EstilosGlobais/Estilos'
import { Card } from './componentes/Card/Card'
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema'
import { useState } from 'react'
import { Tipografia } from './componentes/Tipografia/Tipografia'
import { CampoTexto } from './componentes/CampoTexto/CampoTexto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProvedorTema>
    <Estilos />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers.
          Em seguida você podera dar mais detalhes sobre suas demandas e sobre sua forma de trabalho
        </Tipografia>
        <CampoTexto titulo="Nome Completo" />
      </Card> 
     </ProvedorTema>
  )
}

export default App
