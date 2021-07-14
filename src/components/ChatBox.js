//import styled from "styled-components";
//import { useRef, useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import './Chat.css';


 //import { AuthProvider } from '../context/AuthContext'

//import axios from 'axios'


const ChatBox = () => {
    
    return(
        <div id='wrapper'>
        
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    Plantpedia Chat
            </div>
            {/* <div  className='logout-tab'>
                    Logout
            </div> */}
        </div>

                <ChatEngine
                height='70vh'
                with='70%'
                projectID='cf898989-697a-41cf-a92e-fa5161403740'
                userName='aegli'
                userSecret='123'
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                />
        </div>
        
        </div>
    )
}


export default ChatBox;