import {useState} from 'react'

import SideBar from "./components/SideBar";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";

function App() {
  const [isOn, setIsOn] = useState(false)
  const handleClick = (e) => {
    setIsOn(state => !state)
    if (isOn) e.target.innerHTML = 'LIGHT MODE'
    if(!isOn)e.target.innerHTML = 'DARK MODE'
}
  return (
    <div className={isOn?'light':'dark'}>
      <div className='btn'>
        <button onClick={handleClick}>THEME CHANGE</button>
      </div>
      <main>
        <div className='outer-container'>
          <SideBar isOn={isOn}/>
        <div className='inner-container'>
            <Reviews isOn={isOn} />
            <Rating isOn={isOn} />
            <Analysis isOn={isOn} />
            <Visitors isOn={isOn} />
        </div>
        </div>
      </main>
    </div>

  );
}

export default App;
