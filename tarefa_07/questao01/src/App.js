import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "Samuel", 
      sobrenome: "Alves Silva"
    }
  }

  alterarNomeCompleto = () => {
    this.setState({
      nome: "José",
      sobrenome: "Gomes Santos"
    })
  }

  render() {
    return (
      <div>
        <p>Nome : <b>{ this.state.nome}</b></p>
        <p>Sobrenome : <b>{ this.state.sobrenome}</b></p><br/>
        <button onClick={this.alterarNomeCompleto}>Alterar</button>
      </div>
    );
  }
}
export default App;