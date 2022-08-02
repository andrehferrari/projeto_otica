import React from 'react'
import './App.css';
import Topo from './componentes/Topo'
import Capa from './componentes/Conteudo/secao capa'
import Produto from './componentes/Conteudo/secao produtos';
import Sobre from './componentes/Conteudo/secao sobre';
import Conosco from './componentes/Conteudo/secao conosco';

function App() {
  return (
    <div>
      <Topo />
      <Capa />
      <Produto />
      <Sobre />
      <Conosco/>
    </div>
  );
}

export default App;
