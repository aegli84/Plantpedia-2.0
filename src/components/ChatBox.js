//import styled from "styled-components";
import { useRef, useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import './Chat.css';
import { useHistory } from 'react-router-dom';
import { auth } from '../components/firebase'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import {FiLogOut } from "react-icons/fi"



const ChatBox = () => {
    
    // if(!localStorage.getItem('username')) return <LoginForm />

    const didMountRef = useRef(false)
    const history = useHistory()
    const { user } = useAuth()
    const [loading, setLoading] =useState(true)

    const handleLogout = async () => {
        await auth.signOut()
        history.push("/login") // re-navigates to the login form after logout
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpeg', {type: 'image/jpeg'})
    }
    useEffect (() => {
        if (!didMountRef.current) {
            didMountRef.current = true
    
            if (!user || user === null) {
                history.push("/")
                return
            }
        }
                //trying to get the exisiting user
                axios.get(
                    'https://api.chatengine.io/users/me/',
                    { headers: { 
                    "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
                    "user-name": user.email,
                    "user-secret": user.uid
                }}
                )
            
                .then(() => setLoading(false))
            
                .catch(e => {
                    let formdata = new FormData()
                    formdata.append('email', user.email)
                    formdata.append('username', user.email)
                    formdata.append('secret', user.uid)
            
                    getFile(user.photoURL)
                    .then(avatar => {
                    formdata.append('avatar', avatar, avatar.name)
            
                    axios.post(
                        'https://api.chatengine.io/users/',
                        formdata,
                        { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY }}
                    )
                        .then(() => setLoading(false))
                        .catch(e => console.log('e', e.response))
                    })
                })
                  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            
                
                }, [user, history])



    if(!user || loading)  return <div className='tracking-in-expand' style = {{textAlign: 'center', color: 'whitesmoke', display: 'block', fontSize: '1.8rem'}}>Chat loading, please wait...</div>

    return(
        <div id='wrapper'>
            <div className='chats-page'>
                <div className='nav-bar'>
                    <div onClick={handleLogout} className='logout-tab'>
                            <FiLogOut size = '2rem'/>
                    </div>
                    <div className='logo-tab'>
                        Plantpedia Chat
                    </div>
            </div>
                <ChatEngine 
                height='75vh'
                projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                userSecret={user.uid}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                />
            </div>
        </div>
    )
}


export default ChatBox;