import React, { Component } from 'react';
import Aluno from './Aluno';
class Faculdade extends Component {
    render() {
        return( 
            <div>
                <h3>Quem está na Faculdade?</h3>
                <Aluno />
            </div>
        )
    }
}

export default Faculdade;