import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Carousel} from 'react-bootstrap';
import '../index.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
const fadeImages = [
    '/Images/SliderImages/Slide1.jpg',
    '/Images/SliderImages/Slide2.jpg',
    '/Images/SliderImages/Slide3.jpg'
  ];

const Tryslide=()=>{
    return(
        <>
        <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} style={{width: "100vw" ,height:'100vh'}} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} style={{width: "100vw",height:'100vh'}} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} style={{width: "100vw", height:"100vh"}}/>
            </div>
            
          </div>
        </Fade>
      </div>

        
        </>
    );
}

export default Tryslide;