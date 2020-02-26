import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Home } from './home'
import { Skills } from './skills';
import { Experience } from './experience';

function App() {
  window.__PORTFOLIO__ = { buildId: process.env.REACT_APP_BUILD_ID }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Home />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
