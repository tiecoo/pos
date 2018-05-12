import React, { Component } from 'react';
// import './App.css';
import { Portfolio } from './components/portfolio';
import { Panel } from './components/panel';
import { Pessoa } from './components/helloperson';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      nome: event.target.value
    })
  }


  render() {
    return (
      <div>
        <input type="text" value={this.state.nome} onChange={this.handleChange} />
        <Pessoa nome={this.state.nome} />
        <Panel  nome={this.state.nome}/>
      </div>
      
    )
  }
}

export default App;
