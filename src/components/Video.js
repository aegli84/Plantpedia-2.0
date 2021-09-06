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
                <motion.div 
                    variants = {pageAnimation} 
                    initial = "hidden" 
                    animate = "show">
                    <H1 variants = {titleAnimation}>We are Plantpedia</H1>
                    <div>
                        <P variants = {fade}>An all-in-one solution for all levels of plant parents, where knowledge can be found and shared easily. </P>
                    </div>
                    </motion.div>
                    <motion.div 
                        variants = {pageAnimation} 
                        initial = "hidden" 
                        animate = "show" 
                        style ={{display:'flex',
                        alignItems:'left',
                        justifyContent:'space-between'}}>
                    <Link to ="/Plantpedia" >
                        <ButtonPurple variants = {fade} type='button' size="large" >Find plant
                        </ButtonPurple>
                    </Link>
                    <Link to ="/Shop">
                        <ButtonGreen variants = {fade} type='button' size="large" >Shop
                        </ButtonGreen>
                    </Link>
                </motion.div>
            </Container>
    )
}

const Container = styled.div`
    background-color: black;
@media (max-width: 768px) {
    display: flex;
    align-items: center;
    text-align: center;
    
}

@media (max-width: 480px) {
    display: flex;
    align-items: center;
    text-align: center;
    background-color: transparent;
    
}
`

const Div = styled.div`
    width: 65%; 
    height: 100vh; 
    z-index: -2;
@media (max-width: 768px) {
    width: 50%;
    height:55vh;
    background-color:transparent;
}

@media (max-width: 480px) {
    height:60vh;
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
    padding-top: 17rem;
    padding-left: 5rem;
    color: whitesmoke;
    font-size: 3.5rem;
    font-family: 'Montserrat', sans-serif !important;
    text-shadow: 0  15px 7px black; 
@media (max-width: 768px) {
    font-size: 2.7rem;
    padding: 15rem 25rem 15rem 5rem;
}

@media (max-width: 480px) {
    font-size: 4rem;
    padding: 8rem 2rem 15rem 2rem;
}
`

const P = styled(motion.p)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: whitesmoke;
    padding: 25rem 68rem 15rem 6rem;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;
    text-shadow: 0 5px 5px black;
@media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 20rem 35rem 15rem 5rem;
}

@media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 20rem 3rem 15rem 3rem;
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

    @media (max-width: 768px) {
        bottom: 63%;
        font-size: 1rem;
        width: 15%;
        left: 10%;
}

@media (max-width: 480px) {
    font-size: .8rem;
    width: 25%;
    left: 20%;
    padding: 1.2rem;
    bottom: 33rem;
    box-shadow: 0 4px 10px 0 black;
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

    @media (max-width: 768px) {
        bottom: 63%;
        font-size: 1rem;
        width: 15%;
        left: 28%;
}

@media (max-width: 480px) {
    font-size: .8rem;
    width: 25%;
    left: 56%;
    padding: 1.2rem;
    bottom: 33rem;
    box-shadow: 0 4px 10px 0 black;
}
`
export default Video;

