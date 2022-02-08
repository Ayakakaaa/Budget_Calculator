import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import React, { useState, useEffect } from 'react';
import { getItems } from './Api.js';
import { ItemsContainer } from "./ItemsContainer";
import { Total } from './Total.js';

export function Form() {
    const [items, setItems] = useState([]);

    useEffect(()=> {
      getItems().then(data => setItems(data));
    }, []);
  
    const [budget, setBudget] = useState(0)
    const [selectedItems, setSelectedItems] = useState({});

    const handleBudget = (event) => {
        setBudget(event.target.value);
    };

    const handleSelectedItems = (toAdd, typeIndex, item) => {
        const tempSelectedItems = {...selectedItems};
        if(toAdd) {
            tempSelectedItems[typeIndex] = item;
        } else {
            delete tempSelectedItems[typeIndex];
        }
        setSelectedItems(tempSelectedItems);
    }

    return (
        <>
            <Box>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Budget</InputLabel>
                {budget > 0 ? null : <p>Please input your budget!</p>}
                <Input
                    id="standard-adornment-amount"
                    value={budget > 0 ? budget : ""}
                    onChange={handleBudget}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                </FormControl>
            </Box>
            <ItemsContainer items={items} selectedItems={selectedItems} handleSelectedItems={handleSelectedItems}/>
            <Total selectedItems={selectedItems} budget={budget}/>
        </>

    )
  };