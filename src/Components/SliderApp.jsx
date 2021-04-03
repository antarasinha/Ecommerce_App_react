import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Carousel} from 'react-bootstrap';
import '../index.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import './Slideapp.css';


const fadeImages = [
    '/Images/SliderImages/Slide1.jpg',
    '/Images/SliderImages/Slide2.jpg',
    '/Images/SliderImages/Slide3.jpg'
  ];
  const style = {
    textAlign: "center",
    padding: "200px 0",
    fontSize: "30px"
  };

const SliderApp=()=>{
    return(
        <>
        <div className="slide-container">
        <div className="blaks">
        <Fade>
        
          <div className="each-fade">
          
            <div className="each-slide">
           
            <div style={{'backgroundImage': `url(${fadeImages[0]})`}}>
            <div className="blaks">
            <div className="box">
            <h1>Hygienic Stores</h1>
         
          <button className="btn btn-light slidebtn"><b>Explore</b></button>
          </div></div>
            </div></div>
            
          </div>
          <div className="each-fade">
          <div className="each-slide">
        
          <div style={{'backgroundImage': `url(${fadeImages[1]})`}}>
          <div className="blaks">
          <div className="box">
          <h1>Best Offers</h1>
          
          <button className="btn btn-light slidebtn"><b>Explore</b></button>
          </div></div></div>
          </div>
            
          </div>
          <div className="each-fade">
          <div className="each-slide">
          <div style={{'backgroundImage': `url(${fadeImages[2]})`}}>
          <div className="blaks">
          <div className="box">
            <h1>Try New</h1>
            
            <button className="btn btn-light slidebtn"><b>Explore</b></button>

          </div>
          
          </div>
            </div></div>


          </div>
        </Fade>
        </div>
      </div>

        
        </>
    );
}

export default SliderApp;