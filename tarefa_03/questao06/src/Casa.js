import React, { Component } from 'react';
import Porta from './Porta';
import Janela from './Janela';
class Casa extends Component {
    render() {
        return (
            <div>
                <h3>Eu sou uma Casa</h3>
                <Janela />
                <Porta />
            </div>
        );
    }
}
export default Casa;