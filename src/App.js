import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

import './App.css';

const TestDiv = styled.div`
    width: 150px;
    height: 150px;
    background-color: red;
    position: absolute;
    left: 0;
    top: 0;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestDiv />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
