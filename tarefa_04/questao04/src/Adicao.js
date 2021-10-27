import React, { Component } from 'react';

class Adicao extends Component {
    render() {
        return (
            <div>
               <b> O resultado de {this.props.x} + {this.props.y} = {this.props.x + this.props.y}</b>
            </div>
        );
    }
}
export default Adicao;