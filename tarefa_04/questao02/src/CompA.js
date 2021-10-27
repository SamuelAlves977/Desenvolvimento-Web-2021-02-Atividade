import React, { Component } from 'react';

class CompA extends Component {
    render() {
        return (
            <div>
                Olá, {this.props.nome} {this.props.sobrenome}.
            </div>
        );
    }
}
export default CompA;