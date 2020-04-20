import React, { Component } from 'react';
import Nome from './Nome';
import Apelido from './Apelido';

class Identificacao extends Component{
    render(){
        return(
            <div>
                <p>Nome: {this.props.nome}</p>
                <p>Apelido: {this.props.apelido}</p>
            </div>
        );
    }
}

export default Identificacao;