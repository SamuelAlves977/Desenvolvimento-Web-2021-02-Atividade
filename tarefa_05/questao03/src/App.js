import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador : 0
    }

    this.decrementa = this.decrementa.bind(this);
    this.incrementa = this.incrementa.bind(this);
  }

  decrementa() {
    this.setState({contador : this.state.contador-1
    });
  }

  incrementa() {
    this.setState({contador : this.state.contador+1
    });
  }
  render() {
    const {contador} = this.state;
    return (
      <div>
        <br/>
        O valor é: {contador}<br/><br/>
        <button onClick={this.incrementa}>Incrementa</button>
        <button onClick={this.decrementa}>Decrementa</button>
      </div>
    );
  }
}
export default App;