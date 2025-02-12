import { useState } from 'react'

import orbe from './assets/orbe.gif'
import blueOrbe from './assets/blueOrbe.gif'
import voice from './assets/voice.gif'
import './App.css'

function App() {


  return (
    <>
    <img src={voice} alt="Vite logo" />
    <div>    
    </div>

    <div className='login-container'>
    <img src={orbe} alt="Vite logo" className="logo"/>
    <img src={blueOrbe} alt="Vite logo" className="logo react"/>
    </div>




    </>
  )
}

export default App
