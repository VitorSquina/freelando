import React from "react";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Card } from "./componentes/Card/Card";

const App = () => {
  return (
    <ProvedorTema>
      <Card>
        Conteúdo do Card
      </Card>
    </ProvedorTema>
  );
};

export default App;
