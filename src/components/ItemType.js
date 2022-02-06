import React, { useState, useEffect } from 'react';
import TabPanel from '@mui/lab/TabPanel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export function ItemType({type, typeIndex, items}) {
    const [selection, setSelection] = useState("");
    const updateSelection = (event) => {
        console.log(event.target.checked, event.target.value);
        // console.log(item.name)
        setSelection(event.target.value);
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
                                {/* {console.log("TYPE",type,item.type, "INDEX: ", typeIndex, "NAME", item.name, "selection: ", selection)} */}
                                <FormControlLabel control={<Checkbox value={item.name} id={selection} onChange={updateSelection} checked={item.name === selection}/>} label= {item.name} />
                            </FormGroup>
                        </TabPanel>
                    )
                })
            }
          
        </>
    );
  }