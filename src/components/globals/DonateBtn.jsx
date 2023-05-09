import React from 'react'
import "../../index.css"
import DonateIcon from '../../assests/hand-heart.png'
import { NavLink } from 'react-router-dom'

const DonateBtn = () => {
  return (
      <NavLink className='donateBtn' to='/donate'>Donate Now <img src={DonateIcon} alt="donatebtn" /></NavLink>


  )
}

export default DonateBtn