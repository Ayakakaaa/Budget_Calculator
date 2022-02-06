import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getItems } from './components/Api.js';
import { InputAdornments } from "./components/Form.js";

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    getItems().then(data => setItems(data));
  }, []);

  console.log(items);
  return (
    <>
      <InputAdornments/>
      <ul>
      {
        items.map((item, index)=> {
          return <li key = {index}>{item.type}</li>
        })
      }
      </ul>
    </>
  );
}

export default App;
