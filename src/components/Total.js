import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
    const calcHigherPrice = () => {
        // saving as array of items
        const selectedItemsArr = Object.values(selectedItems);
        let total = 0;
        for (let item of selectedItemsArr) {
            total += parseInt(item.highPrice);  
        }
        return total/100;
    }

    const lowerPrice = calcLowerPrice();
    const higherPrice = calcHigherPrice();

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <>
        {
            budget !== 0 ? 
                <p>
                    {dollarUS.format(lowerPrice)} - {dollarUS.format(higherPrice)}
                    {
                        (lowerPrice > budget) ? 
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="warning">Over Price</Alert>
                        </Stack>: 
                         null
                    }
                    {
                        (higherPrice < budget) ? 
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="info">Under Price</Alert>
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
                </p> :
                <p>Please tell us your budget!</p>
        }
        </>
      );
    
}