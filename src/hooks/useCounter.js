import { useCallback, useState, useRef } from "react"


export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);


    const start = useCallback(() => {
        if (!running) {
            setRunning(true);
            intervalRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000); // Increement by 1 every second
        }
    }, [running]);

    const pause = useCallback(() => {
        if (running) {
            clearInterval(intervalRef.current);
            setRunning(false);
        }
    }, [running]);

    const reset = useCallback(() => {
        clearInterval(intervalRef.current);
        setRunning(false);
        setCount(initialValue);
    }, [initialValue]);

    return {
        count,
        start,
        pause,
        reset
    }

}