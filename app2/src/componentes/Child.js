import React, { Component } from 'react';

class Child extends Component{
    render(){
        return(
            <div>
                <h3>Child</h3>
                <p>Nome: {this.props.nome}</p>
            </div>
        )
    }
}

export default Child;