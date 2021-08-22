import herovideo from '../assets/herovideo.mp4';
import styled from "styled-components";
import { motion } from 'framer-motion'
import { titleAnimation, fade, pageAnimation } from '../animations'
//import {  Button } from '@material-ui/core';

const Video = () => {
    return (
        <>
            <Div>
                <Video2 src= {herovideo} autoPlay muted loop/>
            </Div>
                <motion.div variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show">
                    <H1 variants = {titleAnimation}>We are Plantpedia</H1>
                    <div>
                        <P variants = {fade}>An all-in-one solution for all levels of plant parents, where knowledge can be found and shared easely. </P>
                    </div>
                    </motion.div>
                    <motion.div variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show" style ={{display:'flex',
    alignItems:'left',
    justifyContent:'space-between'}}>
                    
                        <ButtonPurple variants = {fade} type='button' size="large" >Find plant
                        </ButtonPurple>
                        <ButtonGreen variants = {fade} type='button' size="large" >Shop
                        </ButtonGreen>
                </motion.div>

            </>
    )
}

const Div = styled.div`
    width: 100vw; 
    height: 100vh; 
    z-index: -1;
    background-color:black;
@media (max-width: 767px) {
    width: 100vw; 
    height: 40vh;
}
@media (max-width: 400px) {
    width: 100%; 
    height: 40vh;
}
`
const Video2 = styled.video`
    width:100%; 
    height:100%;
    object-fit: cover;
    position: relative;
    left: 20%;
`
const H1 = styled(motion.h1)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 15rem;
    padding-left: 5rem;
    color: whitesmoke;
    font-size: 3.5rem;
    font-family: 'Montserrat', sans-serif !important;
    text-shadow: 0  15px 7px black; 
@media (max-width: 768px) {
    padding-top: 3rem;
    text-align: center;
}

@media (max-width: 480px) {
    padding-top: 1.5rem;
    font-size: 4rem;
    margin: 1rem;
    text-align: center;
}
`

const P = styled(motion.p)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: whitesmoke;
    padding: 22rem 55rem 15rem 5rem;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;
    text-shadow: 0 5px 5px black;
@media (max-width: 768px) {
    margin: 1.5rem 6rem;
    font-size: 1.6rem;
}

@media (max-width: 480px) {
    margin: 1rem 2rem;
    font-size: 1.6rem;
}
`

const ButtonPurple = styled(motion.button)`
    background-color:#7e66a3;
    color: whitesmoke; 
    position: absolute;
    left: 7%;
    bottom: 30%;
    right: 0;
    width: 10%;
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
`
const ButtonGreen = styled(motion.button)`
    background-color:#83a46f;
    position: absolute;
    left: 19%;
    bottom: 30%;
    right: 0;
    color: whitesmoke; 
    width: 10%;
    padding-bottom: 20rem;
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
`
export default Video;

