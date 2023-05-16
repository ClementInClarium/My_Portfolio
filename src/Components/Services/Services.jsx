import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        {/* left Side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <spane>
                Lorem ispum is simpley dummy test
                <br />
                ispum is simpley
            </spane>
            <button className='button s-button'>Download CV</button>
            <div className="blur s-blurl" 
            style={{background: '#ABF1FF94'}}>

            </div>
        </div>  
        {/* right Side */}
        <div className="cards">
            The Right
        </div>
    </div>
  )
}

export default Services