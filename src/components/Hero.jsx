import React from 'react'
import Header from './globals/header/Header'
import Image from '../assests/HeroImg.png'
import DonateBtn from './globals/DonateBtn'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-content">
        {/* HERO TEXT */}
        <div className="hero-child hero-text">
          <div className='hero-title'>
            <h2>Feel proud be the part of revolution in <span>Africa</span></h2>
          </div>
          <div className="hero-desc">
            <p>Great futures are built with a small charity, be the reason someone smiles today. IDashU is a digital platform for collecting donations for those in need in africa.</p>
          </div>
          <div className='hero-btn'>
            <DonateBtn/>
          </div>
        </div>

        {/* HEREP IMAGE */}
        <div className="hero-child hero-image">
          <img src={Image} alt="hero-Img"/>
        </div>
      </div>
        
    </div>
  )
}

export default Hero