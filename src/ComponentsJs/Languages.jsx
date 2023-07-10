import React from 'react'
import '../styles/Languages.css'

export function Languages() {
  return (
    <div style={{
      display:'flex',
      textAlign:'left',
    }}>
      <div style={{
        width: '30%',
      }}>
       <h2 style={{marginLeft:'30px'}}>LANGUAGES</h2>
      </div>
      <div className="lng-details" style={{
        width:'70%',
      }}>
        <p><b>Ghanaian Language</b>, Twi</p>
        <p style={{marginBottom:'0px'}}><b>Eglish</b></p>
        <div className='div-deg' style={{
          width:'40%',
          height:'5px',
          marginTop:'5px'
          
        }}></div>
      </div>
    </div>
  )
}
