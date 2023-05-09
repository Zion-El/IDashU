import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Mission from './Pages/Mission/Mission'
import Help from './Pages/help/Help'
import HowTo from './HowTo/HowTo'
import Globe from './globe/globe'


const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Mission/>
        <Help/>
        <HowTo/>
        <Globe/>
    </div>
  )
}

export default Home