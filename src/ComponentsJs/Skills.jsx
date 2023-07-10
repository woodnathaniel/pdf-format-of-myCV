import React from 'react'
import '../styles/Skills.css'
import PendingTwoToneIcon from '@mui/icons-material/PendingTwoTone';

export function Skills() {
  return (
    <div>
      <div className='deg'></div>
      <div className='on'></div>

    <div className='cont'>
      <div className="skill" >
        <h2 style={{
        marginLeft: '30px'
      }}>Skills</h2>
      </div>
      <div className="details">
        <ul className='ul'>
          <li className='li'> Database Administration with Microsoft SQL Server 2019</li>
          <li className='li'> Good Knowledge in using Cisco Packet Tracer Application for Network Administration</li>
          <li className='li'> Good Knowledge in using Microsoft Office Tools</li>
          <li className='li'> Web Development, Front End Engineer, JavaScript(React JS, Redux)</li>
          <li className='li'> Mobile Development with React Native</li>
          <li className='li'> PPE Use</li>
        </ul>
      </div>
    </div>
    </div>
  )
}
