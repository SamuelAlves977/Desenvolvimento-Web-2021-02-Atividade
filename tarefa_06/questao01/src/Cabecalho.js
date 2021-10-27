import React, { Component } from 'react';

class Cabecalho extends Component {
    constructor(props) {
        super(props);
        this.state = {
            corFavorita: "vermelho"
        }
    }
    render() {
        const {corFavorita} = this.state;
        return (
            <div>
                A minha cor favorita é <b>{corFavorita}</b>.
            </div>
        );
    }
}
export default Cabecalho;