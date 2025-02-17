import React, { useState, useEffect, useRef } from 'react';
// reference code from https://www.youtube.com/watch?v=jPo0mIcNZfM
import "./Duration.css";

function Screen2({ exerciseName }) {

    const [isStarted, setStarted] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isStarted) {
            intIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intIdRef.current);
        } 
        // clears the current interval so program stops running

    }, [isStarted]);

    function start() {
        setStarted(true);
        startTimeRef.current = Date.now() - elapsedTime;
        // subtracts current time from Epic, when the computer thinks time started
        // console.log(startTimeRef.current);
    }

    function stop() {
        setStarted(false); //change property to false to stop the timer from running 
    }

    function reset() {
        setElapsedTime(0);
        setStarted(false);
    }

    function formatTime() {
        //let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); 
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); 
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");


        return `${minutes}:${seconds}:${milliseconds}`;
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