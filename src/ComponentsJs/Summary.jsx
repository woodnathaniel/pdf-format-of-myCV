import React from 'react'
import '../styles/Summary.css'
import '../styles/Deg.css'

export  function Summary() {
  return (
    <div> 
    <div className="deg"></div>
    <div className='on'></div>

    <div className='cont'>
      <div className='sum-div'> <h2 style={{
        marginLeft:'35px'
      }}>SUMMARY</h2></div>
      <div className='para-div'>
        <p>A passionate, highly motivated.
            I believe in continuous improvement and delivering exceptional results through analytical, collaborative, and problem-solving techniques.
            I have good communication skills and appreciate the importance of delivering outstanding customer care to achieve business objectives.</p>
      </div>
    </div>
    </div>
  )
}
