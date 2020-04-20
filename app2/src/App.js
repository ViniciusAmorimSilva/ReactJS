import React from 'react';
import Identificacao from './componentes/Identificacao';
import Child from './componentes/Child';

class App extends React.Component{

  state = {
    nome: "João"
  }

  Alterar = () => {
    this.setState({
      nome: "Joaquim"
    });
  }

  render(){
    return(
      <div>
        <h3>Parent</h3>

        <button onClick={this.Alterar}>Alterar</button>
        <hr/>

        <Child nome={this.state.nome} />
      </div>
    );
  }
}

export default App;
