import React from 'react'

export function Websites() {
  return (
    <div>
      
      <div className="deg"></div>
      <div className='on'></div>
    <div style={{
      display:'flex',
      flexDirection:'row',
      textAlign:'left'
    }}>
      <div className='web-header' style={{
        width:'25%'
      }}><h2 style={{marginLeft:'30px'}}>WEBSITES</h2></div>
      <div className="web-details" style={{
        width:'75%'
      }}>
        {/* <div className='linkIn'><p><b>LINKIN:</b> www.linkedin.com/in/nathaniel-adusei-poku-6a17802</p></div> */}
        <div className='gitHub'><p><b>GITHUB:</b> https://github.com/woodnathaniel</p></div>
      </div>
      
    </div>
    </div>
  )
}
