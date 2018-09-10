import React, { Component } from 'react';
import logo from './fibonacci-logo.png';
import './App.css';
import FibonacciContainer from './app/fibonacci/FibonacciContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Fabulous Fibonacci Generator</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
			<FibonacciContainer />
		</main>
      </div>
    );
  }
}

export default App;
