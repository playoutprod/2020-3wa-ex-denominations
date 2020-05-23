import React from 'react';
import Denomination from './components/Denomination'
import logo from './images/logo.svg';
import './css/app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Denomination tokens={[1,5,10,20,50,100,200]}></Denomination>
    </div>
  );
}

export default App;
