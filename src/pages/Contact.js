import styled from "styled-components";
import contactpage from '../assets/bgimg/contactpage.png'
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <Div>
        <div>
        
        <H1>Contact Us.</H1>
            <P>Our team is full of passionate plant parents ready to help. For the speediest reply, please fill out this quick form.</P>
            <P>This ensures we have what’s needed to help you as soon as possible!</P>
            
    </div>
            <ContactForm/>
        </Div>
    )
}

const Div =styled.div`
    height: 90vh;   
    width: 95%;
    background-image: url(${contactpage});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    padding-top: 5rem;

/* 
@media (max-width: 768px) {
    min-height: 69vh;  
    margin-top: 5rem;
    
}

@media (max-width: 480px) {
    min-height: 70vh;
    padding-bottom: 2rem;
    background-size: contain;
} */
`

const H1 = styled.h1`
    text-align: left;
    margin-left: 5rem;
    color: whitesmoke;
    padding-top: 2rem;
    font-size: 3.5rem;
    font-family: 'Montserrat', sans-serif !important;
    text-shadow: 0  15px 7px black; 

/* @media (max-width: 768px) {
    padding-top: 3rem;
}

@media (max-width: 480px) {
    padding-top: 1.5rem;
    font-size: 5rem;
} */
`
const P = styled.p`
    /* text-align: center; */
    color: whitesmoke;
    margin: 0 5rem;
    padding-top: 2rem;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif !important;

/* @media (max-width: 768px) {
    margin: 1.5rem 6rem;
    font-size: 1.6rem;
}

@media (max-width: 480px) {
    margin: 1rem 2rem;
    font-size: 1.6rem;
} */
`

export default Contact;