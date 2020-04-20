import React from 'react';
import Identificacao from './componentes/Identificacao';

class App extends React.Component{
  render(){
    return(
      <div>
        <p>Componente principal</p>
        <Identificacao />
      </div>
    );
  }
}

export default App;
