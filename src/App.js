import React from 'react'
import './App.css';
import Topo from './componentes/Topo'
import Capa from './componentes/Conteudo/secao capa'
import Produto from './componentes/Conteudo/secao produtos';

function App() {
  return (
    <div>
      <Topo />
      <Capa />
      <Produto />
    </div>
  );
}

export default App;
