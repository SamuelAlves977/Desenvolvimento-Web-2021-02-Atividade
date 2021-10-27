import React, { Component } from 'react';

class CompA extends Component {
    render() {
        return (
            <div>
               <b> Nome: {this.props.nome}</b>
            </div>
        );
    }
}
export default CompA;