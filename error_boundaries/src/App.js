

import React, {useState} from 'react'
import ErrorBoundaries from './ErrorBoundaries';



const Bomb = () => {
  throw new Error('💥 CABOOM 💥')
}



const App = (props) => {

  const [explode, setExplode] = useState(false)
  return (
    <>
      Home page
      <button onClick={()=> setExplode(true) }>💣</button>


      <div>
        {explode 
        ? 
        <Bomb />
        : 
        'Push the bomb'}
      </div>
    </>
  )
}

export default App
