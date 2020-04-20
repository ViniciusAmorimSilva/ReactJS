import React from 'react';
import Identificacao from './componentes/Identificacao';

class App extends React.Component{

  state = {
    nome: "João",
    apelido: "Ribeiro"
  }

  render(){
    return(
      <div>
        <p>Componente principal</p>
        <Identificacao nome={this.state.nome} apelido={this.state.apelido}/>
      </div>
    );
  }
}

export default App;
