import styled from "styled-components";
import { ChatEngine } from 'react-chat-engine';

const ChatBox = () => {
    return(
        <Div>
            <div>
                <ChatEngine
                height='70vh'
                userName='aegli'
                userSecret='123'
                projectID='cf898989-697a-41cf-a92e-fa5161403740'
                />
            </div>
        </Div>
    )
}

const Div = styled.div`
    width: 70vw;
    /* height: 71vh; */
    display: inline-block;
    align-content: center;
    justify-content: center;
    background: #918ea4;
    border-radius: .7rem;
    /* box-shadow: 0 8px 32px 10px rgba( 31, 38, 135, 0.37 ); */
    border: 8px solid rgba( 255, 255, 255, 0.18 );
    margin: 5rem 13rem 15rem;
    opacity: 0.85;
    font-weight: 600;
    /* @media (max-width: 770px ){
        width: 60vw;
        
    } */
    div {
        border-radius: .4rem;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        color: #5b5a5c;
        font-family: 'Raleway', sans-serif;
        /* @media (max-width: 770px ){
        
    
    } */
        
    }
`

export default ChatBox;