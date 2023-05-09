import React from 'react'
import './help.css'
import HelpCard from './HelpCard'

const Help = () => {
  return (
    <div className=' help container'>
        <div className="help-desc">
            <h3>You can help lots of people by <span>donating little</span></h3>
            <p>We provide a trusted donation channel for people worldwide to support people in africa</p>
        </div>
        <div className="help-card">
            <HelpCard/>
        </div>

    </div>
  )
}

export default Help