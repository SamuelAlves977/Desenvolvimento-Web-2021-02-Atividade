import React, { Component } from 'react';

class Bola extends Component {
  constructor(props) {
    super(props);
    this.state = {
      material:"couro" ,
    }
  }
  render() {
    const {material} = this.state;
    return (
      <div>
        <h1>Eu tenho uma Bola de {material}.</h1>
      </div>
    );
  }
}
export default Bola;
