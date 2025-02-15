import React, { useState } from 'react'
import './App.css'
import pushups from './assets/img/pushups-pic.png';
import planks from './assets/img/planks.png';
import running from './assets/img/running.png';
import Screen1 from './components/screen1';
import Screen2 from './components/running.jsx';
import Screen3 from './components/planks.jsx';


function App() {

  const [curScreen, setCurScreen] = useState(null);

  const handleNavigation = (screen) => {
    setCurScreen(screen);
  };

  const returnHome = () => {
    setCurScreen(null);
  }

  let screenContent;
  if (curScreen === 'Screen1') {
    screenContent = (
    <>
      <Screen1 />
      <button onClick={returnHome}>Back to Menu</button>
    </>
  );
  } else if (curScreen === 'Screen2') {
    screenContent = (
      <>
        <Screen2 />
        <button onClick={returnHome}>Back to Menu</button>
      </>
    );
  } else if (curScreen === 'Screen3') {
    screenContent = (
      <>
        <Screen3 />
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
                <button className='text-buttons' onClick={() => handleNavigation('Screen1')}>
                  Push-ups
                </button>
            </div>
            <div className='image-item'>
              <img src={running} alt="Image of man running outside" />
              <button className='text-buttons' onClick={() => handleNavigation('Screen2')}>
                Running
              </button>
            </div>
            <div className='image-item'>
              <img src={planks} alt="Image of woman holding a plank" /> 
              <button className='text-buttons' onClick={() => handleNavigation('Screen3')}>
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
