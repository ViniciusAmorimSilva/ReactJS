import React, { Component } from "react";
import { Link } from 'react-router-dom';

const Navegacao = () => {
        return(
            <div>
                <Link to="/">Home</Link> |
                <Link to="servicos">Servicos</Link> |
                <Link to="contatos">Contatos</Link>
            </div>
        );
}

export default Navegacao;