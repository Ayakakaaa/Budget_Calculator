import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { ItemType } from './ItemType.js';

export function ItemsContainer({items}) {
  const [value, setValue] = useState('0');
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const typesArr = items.map((item) => item.type);
  // removing duplicates
  const typesSet = new Set(typesArr);
  // turn back to array so we can map
  const types = [...typesSet];


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
                // setting tab titles
                types.map((type, index) => {
                    return <Tab label={type} value={index.toString()} key={index}/>
                })
            }
          </TabList>
        </Box>
        {
            // passing items for each tab
            types.map((type, index) => {
                // filtering for type
                const itemsArr = items.filter((item) => item.type === type);
                // moving into an object so I can't have duplicates
                const itemsHash = {};
                itemsArr.map((item) => {itemsHash[item.name] = item});
                // itemsHash.Fountain = {name: fountain, type: water, etc...}
                // pushing back into array
                const itemsForType = Object.values(itemsHash);
                return <ItemType type={type} key = {index} typeIndex={index} items={itemsForType} />
            })
        }
      </TabContext>
    </Box>
  );
}