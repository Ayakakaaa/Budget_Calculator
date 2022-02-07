import React, { useState, useEffect } from 'react';
import TabPanel from '@mui/lab/TabPanel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


export function ItemType({type, typeIndex, items, handleSelectedItems}) {
    const [selection, setSelection] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    const getItem = (name) => {
        return items.reduce((prev, curr) => {
            return (curr.name === name) ? curr : prev;
        }, {});
    } 
    const updateSelection = (event) => {
        if(event.target.checked) {
            setSelection(event.target.value);
            handleSelectedItems(true, typeIndex, getItem(event.target.value));
        } else {
            setSelection("");
            handleSelectedItems(false, typeIndex, {});
        }
    };

  
    return (
        <>
            {
                items.map((item,index) => {
                    return (
                        <TabPanel 
                            key={index} 
                            value={typeIndex.toString()}
                        >
                            <FormGroup>
                                <FormControlLabel control={<Checkbox value={item.name} onChange={updateSelection} checked={item.name === selection}/>} label= {item.name} />
                            </FormGroup>
                        </TabPanel>
                    )
                })
            }
          
        </>
    );
  }