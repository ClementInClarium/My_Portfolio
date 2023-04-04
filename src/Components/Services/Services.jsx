import React from 'react';
import HeartEmoji from '../../img/heartemoji.png';
import GlassesEmoji from '../../img/glasses.png';
import HumbleEmoji from '../../img/humble.png';
// import Resume from './resume.pdf';
import Card from '../Card/Card';
import './Services.css';

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
            {/* <a href={Resume} download> */}
            <button className='button s-button'>Download CV</button>
            {/* </a> */}
            <div className="blur s-blurl" 
            style={{background: '#ABF1FF94'}}>

            </div>
        </div>  
        {/* right Side */}
        <div className="cards">
            <div style={{left: '14rem'}}>
              <Card
                emoji = {HeartEmoji}
                heading ={'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
              />
            </div>
            <div style={{top: '12rem', left: '-4rem'}}>
              <Card
              emoji={GlassesEmoji}
              heading={"Developer"}
              detail={"HTML, Css, JavaScript, React, Angular, .NET"}
              />
            </div>
            <div style={{top: '19rem', left: '12rem'}}>
              <Card
              emoji={HumbleEmoji}
              heading={"UX/UI/API"}
              detail={"HTML, Css, JavaScript, React"}
              />
            </div>
            <div className="blur s-blur-2" style={{background: "var(--purple)"}}>

            </div>
        </div>
    </div>
  )
}

export default Services