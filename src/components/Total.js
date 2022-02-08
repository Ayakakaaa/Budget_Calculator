import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ProgressBar from './ProgressBar.js';

export function Total ({selectedItems, budget}){
    const calcTotalPrice = (price) => {
        // saving as array of items
        const selectedItemsArr = Object.values(selectedItems);
        let total = 0;
        for (let item of selectedItemsArr) {
            total += parseInt(item[price]);  
        }
        return total/100;
    }

    const lowerPrice = calcTotalPrice("lowPrice");
    const higherPrice = calcTotalPrice("highPrice");

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <>
        {
            (Object.values(selectedItems).length > 0 && budget !== "") ? 
                <div style={{marginTop: "20px"}}>
                    Total:    
                    {dollarUS.format(lowerPrice)} - {dollarUS.format(higherPrice)}
                    <ProgressBar budget={budget} lowerTotal={lowerPrice} higherTotal={higherPrice} />
                    {
                        (lowerPrice > budget) ? 
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="warning">Over Budget</Alert>
                        </Stack>: 
                         null
                    }
                    {
                        (higherPrice < budget) ? 
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="info">Under Budget</Alert>
                        </Stack> : 
                        null
                    }
                    {
                        (lowerPrice <= budget && higherPrice >= budget) ?
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="success">In range!</Alert>
                        </Stack>:
                        null
                    }
                </div> :
                // show this message until at least one item selected
                <p>Please select your items!</p>
        }
        </>
      );
    
}