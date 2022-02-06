import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getItems } from './components/Api.js'

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    getItems().then(data => setItems(data));
  }, []);

  console.log(items);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Yardzen Firebase Connection Info</h1>
        <code>
          <pre>heyo {items.length}</pre>
        </code>
      </header>
    </div>
  );
}

export default App;
