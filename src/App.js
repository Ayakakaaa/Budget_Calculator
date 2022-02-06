import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getItems } from './components/Api.js';
import { InputAdornments } from "./components/Form.js";
import { ItemsContainer } from "./components/ItemsContainer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    getItems().then(data => setItems(data));
  }, []);

  console.log(items);
  return (
    <>
      <InputAdornments/>
      <ItemsContainer items={items}/>
    </>
  );
}

export default App;
