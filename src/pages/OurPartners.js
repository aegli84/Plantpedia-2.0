import React from "react";
import styled from "styled-components";
import { motion } from 'framer-motion'
import { fade, pageAnimation } from '../animations'

const ExternalFrame = styled.div`
    width:100vw;
    height: 100vh;
    padding-top: 11vh;
    padding-bottom: 7vh;
    background-size: cover;
    background-repeat:no-repeat;

@media (max-width: 770px) {
    height: 90vh;
}
@media (max-width: 380px) {
    height: 95vh;
}

`
const InternalFrame = styled.div`
    width:81vw;
    height: 70vh;
    margin: auto ;
    border-radius: 2rem;
    box-shadow: 0 0 20px black;
    justify-content: space-around; 
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;


@media (max-width: 770px) {
    grid-template-columns: auto auto;
    height: 70vh;

}
@media (max-width: 380px) {
    grid-template-columns: auto auto ;
    height: 70vh;
}
`

const Maps = styled.iframe`
    width: 80vw;
    height: 100%;
    border-radius: 2rem;
`

const H1 = styled(motion.h1)`
    text-align: center;
    text-shadow: 0  15px 7px black; 
    color: whitesmoke;
    padding: 2rem 1rem 2rem 1rem;
    font-size: 3.5rem;
    font-family: 'Raleway', sans-serif !important;

@media (max-width: 770px) {
font-size:2.5rem;
}


@media (max-width: 380px) {
    font-size: 1.5rem;
    margin-top:6vh;
}
`



const OurPartners = () => {

    return(
        <ExternalFrame>
        <motion.div variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show">
            <H1 variants = {fade}>Our Favorite plant Boutique stores</H1>
            <InternalFrame>
                <Maps src="https://www.google.com/maps/d/embed?mid=1XGuiNEAInijDAo5lHWnq90pYvNYZfBpD"></Maps>
            </InternalFrame>
            </motion.div>
        </ExternalFrame>
    )

}

export default OurPartners;