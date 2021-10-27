import React from 'react';

class Cachorro extends React.Component {
    render(){
        return <p>Eu sou um Cachorro e meu nome é <b>{this.props.nome}</b>!</p>;
    }
}
export default Cachorro;