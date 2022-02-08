import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar({budget, lowerTotal, higherTotal}) {
    const [progress, setProgress] = useState((parseFloat(budget) < lowerTotal) ? 100 : 100-(100 * (parseFloat(budget) - lowerTotal) / (higherTotal - lowerTotal)));
    // console.log(parseFloat(budget), lowerTotal, higherTotal)

    useEffect(() => {
        if (parseFloat(budget) < lowerTotal) {
            setProgress(100);
        } else {
            setProgress(100 - (100 * (parseFloat(budget) - lowerTotal) / (higherTotal - lowerTotal)));
        }
    }, [budget, lowerTotal, higherTotal]);


    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" color={(progress >=100) ? 'error' : 'primary'} value={progress} />
        </Box>
    );
}