import React from 'react'
import FeatureBanner from '../assests/featureBanner.png'
import '../index.css'
import FeatureCard from './FeatureCard'
import DonateBtn from './globals/DonateBtn'

const Features = () => {
  return (
    <div className='feature'>
        <img src={FeatureBanner} alt="" className="featureBanner" />
        <div className="container">
            <div className="feature-text">
                <p>OUR FEATURE</p>
                <h2>We believe that we can make more people smile with you</h2>
            </div>
            <div className="feature-card">
                <FeatureCard/>
            </div>
            <div className='featureBtn donateBtn2'>
                <DonateBtn/>
            </div>
        </div>
    </div>
  )
}

export default Features