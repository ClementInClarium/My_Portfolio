import React from 'react'
import './Intro.css';
/* Icons for left */
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
/* Images for right */
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import MyImage from '../../img/MyImage.png';
import ThumbupImoji from '../../img/thumbup.png';
import CrownImoji from '../../img/crown.png';
import GlassesImoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';


function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Clement Sahaya Raj</span>
                <span>Full Stack Developer with high level
                    of knowledge in web designing and development,
                    producting the Quality work
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="#">
                <img src={GitHub} alt="Clement GitHub" />
                </a>
                <a href="#">
                <img src={LinkedIn} alt="Clement LinkedIn" />
                </a>
                <a href="#">
                <img src={Instagram} alt="Clement Instagram" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={MyImage} alt="" />
            <img src={GlassesImoji} alt="" />
            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={CrownImoji} displayText1='FullStack' displayText2='Developer' />
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={ThumbupImoji} displayText1='UI' displayText2='Designer' />
            </div>
            <div className='blur' style={{background: 'rgb(236 210 255)'}}>

            </div>
            <div className='blur' 
            style={{background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem'
            }}>

            </div>
        </div>
    </div>
  )
}

export default Intro