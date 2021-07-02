import React, { useState } from 'react';
import LandingPageVideo from '../assets/LandingPageVideo.mp4';
import styled from "styled-components";

const Video = () => {
    return (
        <Div>
                <Video2 src= {LandingPageVideo} autoPlay muted />
        </Div>
    )
}

const Div = styled.div`
top: 0; 
width: 100vw; 
height: 70vh; 
z-index: -1;
background-color:black;
@media (max-width: 767px) {
    width: 100vw; 
    height: 50vh;
}
@media (max-width: 400px) {
    width: 100vw; 
    height: 30vh;
}
`
const Video2 = styled.video`
    width:100%; 
    height:100%;
    object-fit: fill;
`




export default Video;

