import React from 'react'
import DonateBtn from '../../globals/DonateBtn'
import H1 from '../../../assests/h1.png'
import H2 from '../../../assests/h2.png'
import H3 from '../../../assests/h3.png'
import HH1 from '../../../assests/hh1.png'
import HH2 from '../../../assests/hh2.png'
import HH3 from '../../../assests/hh3.png'

const helpCard = [
    {
        image: H1,
        title: 'Help keep children in school in Africa',
        text: 'Help keep children in africa in school by donating to education system in africa',
        goal: '$5000',
        raised: '$2000',
        donator: HH1
    },
    {
        image: H2,
        title: 'Help keep children in school in Africa',
        text: 'Help keep children in africa in school by donating to education system in africa',
        goal: '$5000',
        raised: '$2000',
        donator: HH2
    },
    {
        image: H3,
        title: 'Help keep children in school in Africa',
        text: 'Help keep children in africa in school by donating to education system in africa',
        goal: '$5000',
        raised: '$2000',
        donator: HH3
    },
    

]

const HelpCard = () => {
  return (
    <div className='grid3'>
        {helpCard.map((item, index)=>
            <div key={index} className='H-card'>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className='target'>
                    <p>Goals: <b>{item.goal}</b></p>
                    <p>Raised: <b className='rai'>{item.raised}</b></p>
                </div>
                <div></div>
                <div className='donator'>
                    <img src={item.donator} alt="" />
                    <div className='donateBtn2'>
                        <DonateBtn/>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default HelpCard