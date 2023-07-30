import React from 'react'
import '../styles/Experience.css'

export function Experience() {
  return (
  <div>
    <div className="deg"></div>
    <div className='on'></div>

      
    <div className="exp-cont" style={{display:'flex', }}>
        <div className="exp" style={{width:'25%', textAlign:'left',}}><h2 style={{marginLeft:'35px'}}>EXPERINCE</h2></div>
        <div className="exp-details" style={{
          width:'70%'
          }}>
            <div className="exp-header" style={{
              textAlign: 'left'
              }}>
                <p><b>Newmont Cooperation Ahafo Mines</b>, Kenyasi, GH</p>
                <p><b>INTERNSHIP STUDENT.</b> 10/2022 - 11/2022</p>
            </div>
            <div className="exp-header-details" style={{
              textAlign:'left', 
              }}>
                <ul>
                    <li className='li'>Worked well in team environment as well independently</li>
                    <li className='li'>Worked with team to support goals and build experience</li>
                    <li className='li'>Help staff members to re-stock supplies and perform other administrative tasks</li>
                    <li className='li'>Attended and Participated in meetings and brainstorming sessions with team members</li>
                    <li className='li'>Attended and Participated in meetings and brainstorming sessions with team members</li>
                    <li className='li'><b>PROJECT<span>(</span>s<span>)</span>:</b> Assisted in a Time To Pay Prjoect</li>
                </ul>
            </div>
        </div>
    </div>
  </div>
  )
}
