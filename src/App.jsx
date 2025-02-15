import React, { useState } from 'react'
import './App.css'
import pushups from './assets/img/pushups-pic.png';
import planks from './assets/img/planks.png';
import running from './assets/img/running.png';
import Screen1 from './components/screen1';


function App() {

  const [curScreen, setCurScreen] = useState(null);

  const handleNavigation = (screen) => {
    setCurScreen(screen);
  };

  return (
    <>
      <div className='main-container'>
        <h1>EXERCISE HERO</h1> 

        <div className='images'>
          <div className='image-item'>
            <img src={pushups} alt="Image of woman in the beginning of push-up position" />
              <button className='text-buttons' onClick={() => handleNavigation('Screen1')}>
                Push-ups
              </button>
          </div>
          <div className='image-item'>
            <img src={running} alt="Image of man running outside" />
            <button className='text-buttons'>
              Running
            </button>
          </div>
          <div className='image-item'>
            <img src={planks} alt="Image of woman holding a plank" /> 
            <button className='text-buttons'>
              Planks
            </button>
          </div>
        </div> 

        <div className='screen-display'>
          {curScreen === 'Screen1' && <Screen1 />}
        </div>


      </div>
      
    </>
  )
}

export default App
