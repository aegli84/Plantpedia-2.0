import styled from "styled-components";
import contactpage from '../assets/bgimg/contactpage.png'
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion'
import { titleAnimation, fade, pageAnimation } from '../animations'

const Contact = () => {
    
    return (
        <>
        <Div >
            <motion.div variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show">
                <H1 variants={titleAnimation}>Contact Us.</H1>
                    <P variants = {fade}>Our team is full of passionate plant parents ready to help. For the speediest reply, please fill out this quick form.</P>
                    <P variants = {fade}>This ensures we have what’s needed to help you as soon as possible!</P>
            </motion.div>
            <ContactForm/>
        </Div>
        </>
    )
}

const Div =styled.div`
    height: 100vh;   
    width: 100%;
    background-image: url(${contactpage});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    padding-top: 9rem;
    

@media (max-width: 768px) {
    padding-top: 5rem;
    display: block;
    justify-content: center;
    height: 95vh; 
}

@media (max-width: 480px) {
    height: 140vh;
    padding-bottom: 12rem;

}
`

const H1 = styled(motion.h1)`
    text-align: left;
    margin-left: 5rem;
    color: whitesmoke;
    padding-top: 2rem;
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
    color: whitesmoke;
    margin: 0 5rem;
    padding-top: 2rem;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;

@media (max-width: 768px) {
    margin: 1.5rem 6rem;
    font-size: 1.7rem;
    text-align: center;
}

@media (max-width: 480px) {
    margin: 1rem 2rem;
    font-size: 1.6rem;
} 
`

export default Contact;