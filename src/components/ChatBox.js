//import styled from "styled-components";
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from '../components/ChatFeed'
import './ChatFeed.css';
import LoginForm from './LoginForm';

const projectID = 'cf898989-697a-41cf-a92e-fa5161403740' //to be added in an .env file

const ChatBox = () => {
    //if not logged in (basically the credentials are not saved in the local storage), then render the login form
    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <>
        <div className='engineDiv'>
                <ChatEngine
                height='70vh'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')} 
                offset={9}
                projectID={projectID}
                renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                />
            
        </div>
        </>
    )
}

//  const Div = styled.div`
//     width: 70vw;
//     display: inline-block;
//     align-items: center;
//     justify-content: center;
//     margin: 5rem 15rem 5rem;
    
    
    
    
    
    
// `

export default ChatBox;