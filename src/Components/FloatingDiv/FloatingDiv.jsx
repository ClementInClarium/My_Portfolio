import React from 'react'
import './FloatingDiv.css'

const FloatingDiv=({image, displayText1, displayText2})=> {
  return (
    <div className="floating-div">
        <img src={image} alt="" />
        <span>
            {displayText1}
            <br/>
            {displayText2}
        </span>
    </div>
  )
}

export default FloatingDiv