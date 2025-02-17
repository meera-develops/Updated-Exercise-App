import React, { useState } from 'react'
import './App.css'
import pushups from './assets/img/pushups-pic.png';
import planks from './assets/img/planks.png';
import running from './assets/img/running.png';
import Screen1 from './components/RepetitionExercise.jsx';
import Screen2 from './components/DurationExercise.jsx';


function App() {

  const [curScreen, setCurScreen] = useState(null);
  const [curName, setName] = useState(null);

  const handleNavigation = (screen) => {
    setCurScreen(screen);
  };

  const returnHome = () => {
    setCurScreen(null);
  }

  const displayName = (exerciseName) => {
    setName(exerciseName);
    console.log("Chosen Exercise: ", exerciseName);
  }

  let screenContent;
  if (curScreen === 'Screen1') {
    screenContent = (
    <>
      <Screen1 exerciseName={curName}/>
      <button onClick={returnHome}>Back to Menu</button>
    </>
  );
  } else if (curScreen === 'Screen2') {
    screenContent = (
      <>
        <Screen2 exerciseName={curName}/>
        <button onClick={returnHome}>Back to Menu</button>
      </>
    );
  } else {
    screenContent = (
      <>
        <div className='main-container'>
          <h1>EXERCISE HERO</h1> 
  
          <div className='images'>
            <div className='image-item'>
              <img src={pushups} alt="Image of woman in the beginning of push-up position" />
                <button className='text-buttons' onClick={() => {
                  handleNavigation('Screen1');
                  displayName('Rep Count');
                }}>
                  Push-ups
                </button>
            </div>
            <div className='image-item'>
              <img src={running} alt="Image of man running outside" />
              <button className='text-buttons' onClick={() => {
                  handleNavigation('Screen2');
                  displayName('Time-Based Exercises');
                }}>
                Running
              </button>
            </div>
            <div className='image-item'>
              <img src={planks} alt="Image of woman holding a plank" /> 
              <button className='text-buttons' onClick={() => handleNavigation('Screen2')}>
                Planks
              </button>
            </div>
          </div> 
  
  
        </div>
        
      </>
    );
  }
  return (
    <div className ='entry'>
      <div className ='screen-display'>
        {screenContent}
      </div>
    </div>
  );

}

export default App
