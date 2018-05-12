import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Profile } from './components/profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      input: ''
    }
    this.findUser = this.findUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  findUser() {
    console.log(JSON.stringify(this.state));
    fetch(`https://api.github.com/users/${this.state.input}`)
      .then(response => response.json())
      .then(json => {
        console.log(JSON.stringify(json))
        this.setState({
          user: json
        })
        // this.setState(this.user = json)
      })
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
    this.findUser();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onBlur={this.handleChange} />
        <Profile data={this.state.user} />
      </div>
    );
  }
}

export default App;
