// import styled from "styled-components";
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
    const [state, handleSubmit] = useForm(process.env.REACT_APP_CONTACT_FORM_KEY);
    if (state.succeeded) {
        return <p>Thank!</p>;
    }
    return (
        <>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    id="name"
                    name = "name" 
                    type = "text" 
                    placeholder ="Full Name" 
                    required= {true}
                    />
                    <ValidationError 
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                <input 
                    id="email"
                    name = "email" 
                    type = "text" 
                    placeholder ="you@email.com" 
                    required= {true}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                <input 
                    type="text" 
                    name="_gotcha" 
                    style= {{display:'none'}} 
                    />
                <textarea 
                    id = "message"
                    type = "text" 
                    name = "message" 
                    cols = "25" 
                    rows = "7" 
                    placeholder= "Your message here"
                    required= {true}
                    >
                </textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                <button 
                    className = "button"
                    id = "submit" 
                    type = "submit" 
                    value = "submit"
                    disabled={state.submitting}
                    >Send
                </button>
            </form>
        </>
    )
}

// const Div =styled.div`
//     min-height: 100vh;   
//     width: 100%;
//     background-image: url(${plantname});
//     background-repeat: no-repeat;
//     background-size: cover;

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

export default ContactForm;
