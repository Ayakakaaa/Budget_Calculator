import React, { useState, useEffect } from 'react';

export function Total ({selectedItems, budget}){
    const calcLowerPrice = () => {
        // saving as array of items
        const selectedItemsArr = Object.values(selectedItems);
        let total = 0;
        for (let item of selectedItemsArr) {
            total += parseInt(item.lowPrice);  
        }
        return total/100;
    }
    const lowerPrice = calcLowerPrice();
    const calcHigherPrice = () => {
        // saving as array of items
        const selectedItemsArr = Object.values(selectedItems);
        let total = 0;
        for (let item of selectedItemsArr) {
            total += parseInt(item.highPrice);  
        }
        return total/100;
    }
    const higherPrice = calcHigherPrice();

    return (
        <>
          {/* {(lowerPrice > budget) ?  <p>over budget</p> : <p styleName = {{color: "red"}}> {lowerPrice}</p>} */}
          {(lowerPrice > budget) ?  <p>over budget</p> : null}
          {(higherPrice < budget) ?  <p>under budget</p> : null}
          {(lowerPrice <= budget && higherPrice >= budget) ?  <p>in range</p> : null}
          {console.log("selected items: ", selectedItems, calcLowerPrice())}
          <p>{calcLowerPrice()}</p> 
          <p>{calcHigherPrice()}</p> 
        </>
      );
    
}