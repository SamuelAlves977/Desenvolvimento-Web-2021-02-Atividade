import React, { Component } from 'react';
import Garrafa from './Garrafa';

class Recipiente extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrar: true
        }

        this.removerCabecalho = this.removerCabecalho.bind(this)
    }
    // O metodo removerCabecalho esta com problemas
    removerCabecalho(){
        this.setState({mostrar: false})
    }

    render() {

        const { mostrar} = this.state;
        
        if(mostrar === true) {
            var meuCabecalho = <Garrafa />;
        }

        return (
            <div>
                {meuCabecalho}
                <button onClick={this.removerCabecalho}>Remover Cabecalho</button>
            </div>
        );
    }
}

export default Recipiente;