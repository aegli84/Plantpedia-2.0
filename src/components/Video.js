import video2 from '../assets/video2.mp4';
import styled from "styled-components";
import { motion } from 'framer-motion'
import { titleAnimation, fade, pageAnimation } from '../animations'
import {  Button } from '@material-ui/core';

const Video = () => {
    return (
        <>
            <Div>
                <Video2 src= {video2} autoPlay muted loop/>
            </Div>
                <motion.div variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show">
                    <H1 variants = {titleAnimation}>We are Plantpedia</H1>
                    <div>
                    <P variants = {fade}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia a placeat deserunt commodi labore neque magnam quidem. Natus, molestias aut.</P>
                    </div>
                    
                    </motion.div>
                    <div >
                    <Button  variant='contained' type='button' style = {{backgroundColor:'#7e66a3', color: 'whitesmoke', position: 'absolute',top:'68%',bottom: '20',left: '6%',
    right: '0', minWidth: '100px'}}>Find plant
    </Button>
                    <Button variant='contained' type='button' style = {{backgroundColor:'#7e66a3', color: 'whitesmoke', position: 'absolute',top:'68%',bottom: '20',left: '15%',
    right: '0', minWidth: '100px'}}>Shop
    </Button>
    
    </div>
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
    object-fit: fill;
    position: relative;
    left: 30%;
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
@media (max-width: 768px) {
    margin: 1.5rem 6rem;
    font-size: 1.6rem;
}

@media (max-width: 480px) {
    margin: 1rem 2rem;
    font-size: 1.6rem;
}
`

export default Video;

