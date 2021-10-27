import React, { Component } from 'react';

class Cabecalho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        }
    }
    componentDidMount() {
        setTimeout(() => this.configurarTempoLimite(),1000);
    };
    configurarTempoLimite = () => {
        this.setState({
          corFavorita: "amarelo"
        });
    }
    render() {
        const {corFavorita} = this.state;
        return (
            <div>
                <h2>A minha cor favorita é {corFavorita}.</h2>
            </div>
        );
    }
}
export default Cabecalho;