import React, { useState, useEffect, useRef } from 'react';
// reference code from https://www.youtube.com/watch?v=jPo0mIcNZfM
import "./Duration.css";

function Screen2({ exerciseName }) {

    const [isStarted, setStarted] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isStarted]);

    function start() {

    }

    function stop() {

    }

    function reset() {

    }

    function formatTime() {
        
        return `00:00:00`
    }


    return (
        <>
            <div className='main-container'>
                <div className='header-content'>
                    <h1>EXERCISE HERO</h1>
                    <h1>{exerciseName}</h1>
                </div>
                <div className='timer'>
                    <div className='view'>{formatTime()}</div>
                    <div className='buttons'>
                        <button onClick={start} className='start-time'>
                            Start
                        </button>
                        <button onClick={stop} className='stop-time'>
                            Stop
                        </button>
                        <button onClick={reset} className='reset-time'>
                            Reset
                        </button>
                    </div>

                </div>
            </div>
        
        </>
    )
}

export default Screen2;