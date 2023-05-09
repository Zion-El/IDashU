import React from 'react'
import './globe.css'
import GlobeImg from '../../assests/globe.png'


const Globe = () => {
  return (
    <div className='globe container'>
        <div className="text">
            <h3>IDashU donors across the <span>Globe</span></h3>
            <p>We are greatly appreciate your donations, and your sacrifice. Your support helps to further our mission.</p>
        </div>
   
        <img src={GlobeImg} alt="globe" />
    </div>
  )
}

export default Globe