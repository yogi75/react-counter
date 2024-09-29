import React from 'react';
import {useCounter} from '../hooks/useCounter';

export const Counter = () => {
    const {count, start, pause, reset} = useCounter(0);

    return (
        <duv className="container">
            <h3>Count: {count}</h3>
            <div className="button-container">
                <button className="button" onClick={start}>Start</button>
                <button className="button" onClick={pause}>Pause</button>
                <button className="button" onClick={reset}>Reset</button>
            </div>
        </duv>
    )

}