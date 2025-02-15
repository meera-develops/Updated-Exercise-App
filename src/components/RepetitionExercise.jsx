import React from 'react';

function Screen1({ exerciseName }) {
    return (
        <>
            <div className='main-container'>
                <h1>EXERCISE HERO</h1>
                <h2>You chose: </h2>
                <h5>{exerciseName}</h5>
                {/* pass in name as prop */}
            </div>
        
        </>
    )
}

export default Screen1;