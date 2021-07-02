import React, { useState } from 'react';
import styled from "styled-components";

const News = () => {
    return (
        <Div>
            <div>News</div>
        </Div>
    )
}

const Div = styled.div`
background-color: #918EA4;
height:20vh;
width: 100vw;
margin-top: 1vh;
@media (max-width: 767px) {
    width: 100vw; 
    height: 15vh;
}
@media (max-width: 400px) {
    width: 100vw; 
    height: 10vh;
}

`


export default News;
