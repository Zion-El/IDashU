import React from 'react'
import Vector1 from '../assests/Vector1.png'
import Vector2 from '../assests/Vector2.png'
import Vector3 from '../assests/Vector3.png'

const features = [
    {
        icon: Vector1,
        title: 'Become Volunteer',
        text: 'Become a volunteer if you are motivated and ready to support people and community.'
    },
    {
        icon: Vector2,
        title: 'Start Donating',
        text: 'Start donating for our campaigns to support people in need.'
    },
    {
        icon: Vector3,
        title: 'Donate Anonymously',
        text: 'Become a volunteer if you are motivated and ready to support people and community.'
    },
]

const FeatureCard = () => {
  return (
    <div className='featureCard grid3'>
        {features.map((item, index)=>
            <div className='featCard' key={index}>
                <img src={item.icon} alt="feature_icon" />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
            </div>
        )}
    </div>
  )
}

export default FeatureCard