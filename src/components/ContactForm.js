import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';
import Grid from "react-fast-grid";
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'


const ContactForm = () => {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_CONTACT_FORM_KEY);
    
    if (state.succeeded) {
        return <P ><br/>Thank you!<br/><br/>
        Your message has been sent and we will get back to you as soon as possible.</P>;
    }
    
    return (
        <>
        <Div variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show">
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sm={10} direction="row">
            <Grid item sm={6} xs={12}>
            <Label>First Name</Label>
                <Input 
                    id="name"
                    name = "name" 
                    type = "text" 
                    placeholder ="" 
                    required= {true}
                    />
                    <ValidationError 
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                    </Grid>

            <Grid item sm={6} xs={12}>
            <Label>Last Name</Label>
                <Input 
                    id="name"
                    name = "name" 
                    type = "text" 
                    placeholder ="" 
                    required= {true}
                    />
                    <ValidationError 
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </Grid>
                
            
            <Grid item sm={6} xs={12}>
            <Label>Email</Label>
                <Input 
                    id="email"
                    name = "email" 
                    type = "text" 
                    placeholder ="" 
                    required= {true}
                    />
                    <ValidationError 
                        style={{color: 'red', fontFamily: 'Montserrat', paddingTop: '1rem'}}
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    </Grid>
                <Input 
                    type="text" 
                    name="_gotcha" 
                    style= {{display:'none'}} 
                    />
                    <Grid item sm={6} xs={12}>
                        <Label>Reason for contact</Label>
                        <Select name="reason-for-contact" required>
                            <Option value="">-- Please choose an option --</Option>
                            <Option value="plantpedia">Plantpedia</Option>
                            <Option value="subscription">Subscription</Option>
                            <Option value="chat">Chat</Option>
                            <Option value="account">Account</Option>
                        </Select>
                    </Grid>
                <Grid item sm={6} xs={12}>
                <Label>Message</Label>
                <Textarea 
                    id = "message"
                    type = "text" 
                    name = "message" 
                    cols = "25" 
                    rows = "7" 
                    placeholder= ""
                    required= {true}
                    >
                </Textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                    <Button 
                        className = "button"
                        id = "submit" 
                        type = "submit" 
                        value = "submit"
                        disabled={state.submitting}
                        >Send
                    </Button>
                </Grid>
            </Grid>
            </form>
        </Div>
        </>
    )
}

const Div = styled(motion.div) `
    border-radius: 1rem;
    box-shadow: 0 10px 30px black;
    padding-left: 7rem; 
    padding-top: 1.5rem;
    padding-bottom: 5rem;
    margin-bottom: 6rem;
    margin-left: 2rem;
    margin-right: 6rem;
    height: 75vh;
    width: 85vw;
    
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );

@media (max-width: 768px) {
    height: 52vh;  
    margin-top: 4rem;
    display: block;
    justify-content: center;
    margin-left: 4.5rem;
}

@media (max-width: 480px) {
    height: 82vh;
    padding-left: 2rem; 
    padding-right: 2rem; 
    margin-left: 2rem;
}
`
const Label = styled.label `
    color: whitesmoke;
    display: block;
    padding: .7rem;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif !important;


@media (max-width: 768px){
    font-size: 1.3rem;
}
`
const Input = styled.input `
    border-radius: .5rem;
    padding: 1rem;
    background-color: #8978a3;
    opacity: 0.9;
    cursor: pointer;
    border: none;
    outline:none;
    width: 100%;
    border: 2px solid #83a46f;
    color: whitesmoke;
    font-family: 'Montserrat', sans-serif !important;
`
const Select = styled.select `
    border-radius: .5rem;
    padding: 1rem;
    background-color: #8978a3;
    border: none;
    outline: none;
    opacity: 0.9;
    width: 100%;
    color: whitesmoke;
    font-family: 'Montserrat', sans-serif !important;
    border: 2px solid #83a46f;
`
const Textarea = styled.textarea `
    border-radius: .5rem;
    background-color: #8978a3;
    padding: 1rem;
    outline: none;
    opacity: 0.9;
    cursor: pointer;
    border: none;
    width: 32vw;
    height: 20vh;
    border: 2px solid #83a46f;
    color: whitesmoke;
    font-family: 'Montserrat', sans-serif !important;
@media (max-width: 768px) {
    width: 59vw;
}

@media (max-width: 480px) {
    width: 71vw;
}
`
const Button = styled.button `
    color: whitesmoke;
    display: block;
    border-radius: .5rem;
    outline:none;
    cursor: pointer;
    border: none;
    padding: 1rem;
    margin-top: 1.7rem;
    width: 50%;
    background-color: #83a46f;
    text-transform: uppercase;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif !important;
    &:hover {
        background-color: #8978a3;
        transition: all 0.4s;
        opacity: .9;
    }
`
const Option = styled.option `
    color: whitesmoke;
    border-radius: .5rem;
    outline:none;
    border: none;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif !important;
`

const P = styled.p`
    text-align: center;
    color: whitesmoke;
    margin: 3rem 10rem 0 1rem;
    text-shadow: 0  15px 7px black; 
    padding: 5rem 2rem 0 3rem;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 1rem;
    box-shadow: 0 10px 30px black;
    height: 50vh;
    font-family: 'Montserrat', sans-serif !important;
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );

@media (max-width: 768px) {
    height: 30vh;  
    margin-top: 4rem;
    display: block;
    justify-content: center;
    margin-left: 10rem;
    backdrop-filter: blur( 2px );
    -webkit-backdrop-filter: blur( 2px );
}

@media (max-width: 480px) {
    width: 70%;
    height: 40vh;
    display: block;
    justify-content: center;
    margin-left: 4.5rem;
    backdrop-filter: blur( 2px );
    -webkit-backdrop-filter: blur( 2px );
}
    `
export default ContactForm;
