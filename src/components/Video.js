import herovid from '../assets/herovid.mp4';
import styled from "styled-components";
import { motion } from 'framer-motion'
import { titleAnimation, fade, pageAnimation } from '../animations'
import {Link } from "react-router-dom";


const Video = () => {
    return (
        <Container >
            <Div>
                <Video2 src= {herovid} autoPlay muted loop/>
            </Div>
            <WeDiv>
                <motion.div 
                    variants = {pageAnimation} 
                    initial = "hidden" 
                    animate = "show">
                    <H1 variants = {titleAnimation}>We are Plantpedia</H1>
                    <div>
                        <P variants = {fade}>An all-in-one solution for all levels of plant parents, where knowledge can be found and shared easily. </P>
                    </div>
                    </motion.div>
                    
                    <ButtonDiv 
                        variants = {pageAnimation} 
                        initial = "hidden" 
                        animate = "show" 
                        >
                    <Link to ="/Plantpedia" >
                        <ButtonPurple variants = {fade} type='button' >Find plant
                        </ButtonPurple>
                    </Link>
                    <Link to ="/Shop">
                        <ButtonGreen variants = {fade} type='button' >Shop
                        </ButtonGreen>
                    </Link>
                </ButtonDiv>
                </WeDiv>
            </Container>
    )
}

const Container = styled.div`
    background-color: black;
@media (max-width: 768px) {
}

@media (max-width: 480px) {
    display: inline-block;
    align-items: center;
    text-align: center;
    /* background-color: transparent; */
    
}
`
const WeDiv = styled.div`
    display: flex;
    flex-direction: row;
    
`
const Div = styled.div`
    width: 65%; 
    z-index: -2;
@media (max-width: 768px) {
    width: 50%;
    background-color:transparent;
}

@media (max-width: 480px) {
    width: 100%;
}
`
const Video2 = styled.video`
    width:100%; 
    height:100%;
    object-fit: cover;
    position: relative;
    left: 60%;
@media (max-width: 768px) {
    left: 100%;
}
@media (max-width: 480px) {
    display: none;
}
`
const H1 = styled(motion.h1)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 9rem 3rem;
    color: whitesmoke;
    font-size: 3.5rem;
    font-family: 'Montserrat', sans-serif !important;
    text-shadow: 0  15px 7px black; 
@media (max-width: 768px) {
    font-size: 2.7rem;
    
}

@media (max-width: 480px) {
    font-size: 4rem;
    
}
`

const P = styled(motion.p)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: whitesmoke;
    margin: 17rem 62rem 0 7rem;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;
    text-shadow: 0 5px 5px black;
@media (max-width: 768px) {
    font-size: 1.3rem;
    
}

@media (max-width: 480px) {
    font-size: 1.5rem;
}
`

const ButtonDiv = styled.div`
    display: flex;
    align-items: left;
    margin: 2rem;
`

const ButtonPurple = styled(motion.button)`
    background-color:#7e66a3;
    color: whitesmoke; 
    width: 10em;
    padding: 1em;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 600;
    &:hover {
        transition: all 0.5s;
        background-color:whitesmoke;
        color: black;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        width: 15%;
    
}

@media (max-width: 480px) {
    font-size: .9em;
    width: 27%;
    padding: 1.5em;
    box-shadow: 0 4px 10px 0 black;
}
`
const ButtonGreen = styled(motion.button)`
    background-color:#83a46f;
    color: whitesmoke; 
    width: 10em;
    padding: 1rem;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif !important;
    font-weight: 600;
    &:hover {
        transition: all 0.5s;
        background-color:whitesmoke;
        color: black;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        
}

@media (max-width: 480px) {
    font-size: .9em;
    padding: 1.5em;
    box-shadow: 0 4px 10px 0 black;
}
`
export default Video;

