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
            // if item is checked, add it to this type's selection and the list of all selected items
            setSelection(event.target.value);
            handleSelectedItems(true, typeIndex, getItem(event.target.value));
        } else {
            // if item is NOT checked, remove it from this type's selection and the list of all selected items
            setSelection("");
            handleSelectedItems(false, typeIndex, {});
        }
    }

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    const itemStyles = {
        display: "flex", 
        flexDirection: "row"
    };

  
    return (
        <Accordion expanded={expanded === typeIndex.toString()} onChange={handleAccordian(typeIndex.toString())}>
            <AccordionSummary expandIcon={
                <ExpandMoreIcon />
            }>
                <Typography sx={{ width: '50%', flexShrink: 0 }}>
                    {/* humanize the type name */}
                    {type.replace(/_/g, " ")}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                    {/* show the currently selected item in the type header */}
                    {selection}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    items.map((item,index) => {
                        return (
                            <FormGroup style={itemStyles} key={index}>
                                <FormControlLabel 
                                    control={<Checkbox value={item.name} 
                                    onChange={updateSelection} 
                                    checked={item.name === selection}/>} 
                                    label= {item.name} 
                                />
                                <small style={{alignSelf:"center"}}>
                                    {dollarUS.format(item.lowPrice/100) + "-" + dollarUS.format(item.highPrice/100)}
                                </small>
                            </FormGroup>
                        )
                    })
                }
            </AccordionDetails>
        </Accordion>
    );
  }