import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export function ItemType({type, typeIndex, items, expanded, handleAccordian, handleSelectedItems}) {
    const [selection, setSelection] = useState("");

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
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

  
    return (
        <Accordion expanded={expanded === typeIndex.toString()} onChange={handleAccordian(typeIndex.toString())}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id={typeIndex.toString()+"panelbh-header"}
            >
                <Typography sx={{ width: '50%', flexShrink: 0 }}>
                    {type.replace(/_/g, " ")}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{selection}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    items.map((item,index) => {
                        return (
                            <FormGroup key={index}>
                                <FormControlLabel control={<Checkbox value={item.name} onChange={updateSelection} checked={item.name === selection}/>} label= {item.name + " " + dollarUS.format(item.lowPrice/100) + "-" + dollarUS.format(item.highPrice/100)} />
                                <small>{dollarUS.format(item.lowPrice/100) + "-" + dollarUS.format(item.highPrice/100)}</small>
                            </FormGroup>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>
    );
  }