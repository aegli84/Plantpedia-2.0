import { useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import './Chat.css';
import { useHistory } from 'react-router-dom';
import { auth } from '../components/firebase'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'
import {FiLogOut } from "react-icons/fi"
import { motion } from 'framer-motion'
import { pageAnimation } from '../animations'


const ChatBox = () => {
    
    const history = useHistory()
    const { user } = useAuth()
    const [loading, setLoading] =useState(true)

    async function handleLogout() {
        await auth.signOut()
        history.push("/Chat")
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpeg', {type: 'image/jpeg'})
    }
    useEffect (() => {
        
            if (!user || user === null) {
                history.push("/")
                return
            }
        
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
                
            
                
                }, [user, history])



    if(!user || loading)  return <div className='tracking-in-expand' style = {{textAlign: 'center', color: 'whitesmoke', display: 'block', fontSize: '2.5rem', fontFamily: 'Montserrat'}}>Chat loading, please wait...</div>

    return(
        <div>
            <motion.div className='chats-page' variants = {pageAnimation} 
                initial = "hidden" 
                animate = "show">
                <div className='nav-bar-main'>
                    <div onClick={handleLogout} className='logout-tab'>
                        <span className='logout-text'>Logout</span>
                            <FiLogOut size = '1.7rem'/>
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
            </motion.div>
        </div>
    )
}


export default ChatBox;