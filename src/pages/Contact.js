import styled from "styled-components";
import plantname from '../assets/bgimg/plantname.png'
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <Div>
           <ContactForm/>
        </Div>
    )
}

const Div =styled.div`
    min-height: 100vh;   
    width: 100%;
    background-image: url(${plantname});
    background-repeat: no-repeat;
    background-size: cover;

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
export default Contact;