import React from 'react'
import './howto.css'
import DonateBtn from '../globals/DonateBtn'
import D1 from '../../assests/D1.png'
import D2 from '../../assests/D2.png'
import HH1 from '../../assests/hh1.png'

const HowTo = () => {
  return (
    <div className='howTo container'>
        <div className='child imagery'>
            <img className='first' src={D1} alt="ghjk" />
            <img className='second' src={D2} alt="gfd" />
            <img className='third' src={HH1} alt="gfd" />
        </div>
        <div className='child desc'>
            <h3>How donation works</h3>
            <p>Register Account</p>
            <p>Go through our donation requirement</p>
            <p>Make Donation</p>
            <div className='mr'>
                <DonateBtn/>
            </div>
            
        </div>
    </div>
  )
}

export default HowTo