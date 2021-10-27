import React, { Component } from 'react';

class CompA extends Component {
    render() {
        return (
            <div>
                Olá, <b>{this.props.nome} {this.props.sobrenome}</b>.
            </div>
        );
    }
}
export default CompA;