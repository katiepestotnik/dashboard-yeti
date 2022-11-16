import {useState} from 'react'

import SideBar from "./components/SideBar";
import Reviews from "./components/Reviews";
import Rating from "./components/Rating";
import Analysis from "./components/Analysis";
import Visitors from "./components/Visitors";
import Button from './components/Button'

function App() {
  const [isOn, setIsOn] = useState(false)
  const handleClick = (e) => {
    setIsOn(state => !state)
    if (isOn) e.target.innerHTML = 'LIGHT'
    if(!isOn)e.target.innerHTML = 'DARK'
}
  return (
    <div className='full' style={{ backgroundColor: isOn ? '#001242' : '#0f50ff' }}>
      <button onClick={handleClick}>LIGHT</button>
      <main>
        <div className='outer-container'>
          <SideBar />
        <div className='inner-container'>
          <Reviews />
          <Rating />
          <Analysis />
          <Visitors/>
        </div>
        </div>
      </main>
    </div>

  );
}

export default App;
