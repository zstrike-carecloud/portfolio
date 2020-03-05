import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Home } from './home'
import { Skills } from './skills';
import { Experience } from './experience';

function App() {
  window.__PORTFOLIO__ = { buildId: process.env.REACT_APP_BUILD_ID }

  const refs = {};

  const handleDownArrowClick = page => {
    refs[page].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

  const setRef = ({ ref, page }) => (refs[page] = ref);

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
      <Home handleDownArrowClick={handleDownArrowClick} />
      <Skills setRef={setRef} />
      <Experience />
    </div>
  );
}

export default App;
