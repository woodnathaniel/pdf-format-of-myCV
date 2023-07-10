import React from 'react'
import '../styles/Education.css'

export  function Education() {
  return (
    <div>
      <div className="deg"></div>
      <div className='on'></div>

    <div className="edu-cont" style={{
      display:'flex',
      flexDirection:'row'
      }}>
      <div className=" edu" style={{
        width:'30%',
        textAlign:'left',

      }} ><h2 style={{marginLeft:'30px'}}>EDUCATION</h2></div>
      <div className="edu-details" style={{
        width:'70%',
        textAlign:'left', 
      }}>
        <div className='uni edu-all'>
          <p><b>University Of Energy And Natural Resources</b>, Sunyani, Ghana</p>
          <p><i>Bachelor of Science</i>: Computer Engineering</p>

        </div>
        <div className='shs edu-all'>
          <p><b>KNUST Senior High</b>, Kumasi, Ghana,06/2016-06/2019</p>
          <p><b><i>Junior High Education</i></b>: BECE</p>
        </div>
        <div className='primary edu-all'>
          <p><b>Osei Kofi Abiri Junior High</b>, Ahafo Kenyasi, Ghana</p>
          <p><b><i>WASSCE</i>:</b> Genaral Science</p>
        </div>
      </div>
    </div>
    </div>
  )
}
