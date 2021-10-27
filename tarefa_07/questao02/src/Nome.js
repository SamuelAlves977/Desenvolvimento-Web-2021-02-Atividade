import React, { Component } from 'react';

class Nome extends Component {

    constructor(props) {
        super(props);
        this.state ={
            Nome: [{name: "Janaine"}, {name: "Ana"}, {name: "Maria"}
            ]
        }
    }

    cmd_click = () => {
        this.setState({
            Nome: [{name: "Cristiane"}, {name: "Clara"},{name: "Eduarda"}]
        })
    }

    render() {
        return (
            <div>
                {this.state.Nome.map((name) => 
                    <p>Nome: {name.name}</p>
                )} 
                <button onClick={this.cmd_click}>Alterar</button>
            </div>
        );
    }
}
export default Nome;