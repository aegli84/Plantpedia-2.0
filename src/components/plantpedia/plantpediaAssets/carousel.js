import { Carousel } from "react-bootstrap";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import "../plantpediaAssets/carouselStyle.css";
import styled from 'styled-components';




const CarouselPics = (props) => {
    const {picture1, picture2, picture3} = props.data;
    return (
                <div className="slide-container">
                    <Slide style={{height:"100%", width:"100%", }}>
                        <div className="each-slide">
                        <div style={{backgroundImage: `url(${picture1[Object.keys(picture1)[0]]})`}}>
                        </div>
                        </div>
                        <div className="each-slide">
                        <div style={{'backgroundImage': `url(${picture2[Object.keys(picture2)[0]]})`}}>
                        </div>
                        </div>
                        <div className="each-slide">
                        <div style={{'backgroundImage': `url(${picture3[Object.keys(picture3)[0]]})`}}>
                        </div>
                        </div>
                    </Slide>
                    </div>
        )
  }


export default CarouselPics;