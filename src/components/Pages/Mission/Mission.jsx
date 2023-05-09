import React from 'react'
import './mission.css'
import MissionTabs from './MissionTabs'
import MissionImg from '../../../assests/mission_img.png'

const Mission = () => {
  return (
    <div className='mission container'>
        <div className='mission-content'>
            <div className="mission-child mission-text">
                <div className="ms-desc">
                    <p className='title'>OUR MISSION</p>
                    <h2>The <span>mission</span> and  <span>goals</span> of IDashU</h2>
                    <p>We provide a trusted donation channel for people worldwide to support people in Africa</p>
                </div>
                <div className="ms-tabs">
                  <MissionTabs/>
                </div>
            </div>
            <div className="mission-child mission-img">
              <img src={MissionImg} alt="mission_img" />
            </div>
        </div>
    </div>
  )
}

export default Mission