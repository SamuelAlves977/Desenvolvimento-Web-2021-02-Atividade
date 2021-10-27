import React, { Component } from 'react';

class Identificacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Samuel",
      sobrenome: "Alves Silva",
      idade : "21"
    }
  }

  render() {
    return (
      <div>
        <p>Nome: <b>{this.state.nome}</b></p>
        <p>Sobrenome: <b>{this.state.sobrenome}</b></p>
        <p>Idade: <b>{this.state.idade}</b></p>
      </div>
    );
  }
}
export default Identificacao;
