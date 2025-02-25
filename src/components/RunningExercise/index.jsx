// reference code from https://www.youtube.com/watch?v=jPo0mIcNZfM
//used code to help understand these React hooks better and how to implement them to make a successful timer
//this youtuber explains concepts in details and tells you what every line of code is doing to help viewers understand

import React, { useState, useEffect, useRef } from 'react';
import "./index.css";

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
            <div className='my-main-container'>
                <div className='my-header-content'>
                    <h1>EXERCISE HERO</h1>
                    <h1>{exerciseName}</h1>
                </div>
                <div className='myTimer'>
                    <div className='myView'>{formatTime()}</div>
                    <div className='myButtons'>
                        <button onClick={start} className='my-start-time'>
                            Start
                        </button>
                        <button onClick={stop} className='my-stop-time'>
                            Stop
                        </button>
                        <button onClick={reset} className='my-reset-time'>
                            Reset
                        </button>
                    </div>

                </div>
            </div>
        
        </>
    )
}

export default Screen2;