import React, { useState } from 'react';
import Identificacao from './componentes/Identificacao';
import Child from './componentes/Child';
import Navegacao from './componentes/Navegacao';
import Home from './componentes/Home';
import Servicos from './componentes/Servicos';
import Contatos from './componentes/Contatos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  const[Nome, setNome] = useState("João");

  const AlterarNome = () => setNome("Joaquim Silva");

  return(
    <div>
      <p>O meu nome é: {Nome} </p>
        <button onClick={() => AlterarNome()}>Alterar</button>
    </div>
  );
}

export default App;
