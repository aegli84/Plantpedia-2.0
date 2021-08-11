import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';
import Grid from "react-fast-grid";

const ContactForm = () => {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_CONTACT_FORM_KEY);
    if (state.succeeded) {
        return <div>Thank!</div>;
    }

    const styles = {
        outer: {
            borderRadius: '.6rem',
            boxShadow: "0 10px 30px black",
            paddingLeft: '7rem', 
            // paddingRight: '5rem', 
            paddingTop: 25,
            paddingBottom: 25,
            marginBottom: 50,
            marginLeft: 10,
            height: '72vh',
            width: '85vw'
            },
        };

    return (
        <>
        <div style={styles.outer}>
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
        </div>
        </>
    )
}


const Label = styled.label `
    color: whitesmoke;
    display: block;
    padding: .7rem;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif !important;
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
    &:hover {
        border: 3px solid #83a46f;
    }
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
    &:hover {
        border: 3px solid #83a46f;
    }
`
const Textarea = styled.input `
    border-radius: .5rem;
    background-color: #8978a3;
    padding: 1rem;
    outline: none;
    opacity: 0.9;
    cursor: pointer;
    border: none;
    width: 28vw;
    height: 20vh;
    &:hover {
        border: 3px solid #83a46f;
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
export default ContactForm;
