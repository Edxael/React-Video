import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Age of the atom</h2>
        </div>
        <p className="App-intro"> FIRE - Mad clown & Hani</p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/XzNqcc__uRs" frameborder="0" allowfullscreen></iframe>

      </div>
    );
  }
}

export default App;
