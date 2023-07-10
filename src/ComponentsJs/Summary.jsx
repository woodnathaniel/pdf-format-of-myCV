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
        <p>This paragraph contains a lot of spaces in the source code, but the browser ignores it.</p>
      </div>
    </div>
    </div>
  )
}
