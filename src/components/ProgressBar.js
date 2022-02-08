import { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar({budget, lowerTotal, higherTotal}) {
    // useCallback fixes useEffect dependency error
    const calcProgress = useCallback(() => {
        const roomInBudget = higherTotal - budget.toString();
        const budgetRange = higherTotal - lowerTotal;
        const result = 100 * roomInBudget / budgetRange;
        if (result < 0) {
            return 0;
        } else if (result > 100) {
            return 100;
        } else {
            return result;
        }
    }, [budget, higherTotal, lowerTotal])

    // const [progress, setProgress] = useState(calcProgress());
    const [progress] = useState(calcProgress());

    // useEffect(() => {
    //     setProgress(calcProgress());
    // }, [calcProgress]);


    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" color={(progress >=100) ? 'error' : 'primary'} value={progress} />
        </Box>
    );
}