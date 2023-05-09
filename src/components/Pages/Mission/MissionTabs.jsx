import React from 'react'

const missionTabs = [
    {
        color: 'tag one',
        num: '01',
        title:'Easy to Use',
        text: 'We provide a trusted donation channel for people'
    },
    {
        color: 'tag two',
        num: '02',
        title:'Accessible to Everyone',
        text: 'We provide a trusted donation channel for people'
    },
    {
        color: 'tag three',
        num: '03',
        title:'Reach Everywhere',
        text: 'We provide a trusted donation channel for people'
    }
]

const MissionTabs = () => {
  return (
    <div className='tabs'>
        {missionTabs.map((item, index)=>
            <div className='tab' key={index}>
                <div className={item.color}>
                    <h3>{item.num}</h3>
                </div>
                <div className="desc">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            </div>
        )}
    </div>
  )
}

export default MissionTabs