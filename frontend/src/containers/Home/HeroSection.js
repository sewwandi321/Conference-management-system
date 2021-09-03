import React from 'react';
//import '../App.css'
import {Button} from './Button';
import './HeroSection.css';
import video from './videos/video-2.mp4'; 

function HeroSection() {
    return (
        <div className='hero-container'>
             <video src={video} autoPlay loop muted/>
             <p>INTERNATIONAL CONFERENCE MANAGEMENT</p>
            <p>SLIIT Software Engineering - 2021 </p> 

             <div className='hero-btns'>
                 {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                 GET START
                 </Button> */}

                 <Button className='btns' buttonStyle='btn--prymary' buttonSize='btn--large'>
                 LATEST CONFERENCES
                 <i className ='far fa-play-circle'/>
                 </Button>
                 <h5 className="sliit">Sri Lanaka Institute of Inforamtion Technology - Malabe</h5>
             </div>
            
        </div>
    )
}

export default HeroSection
