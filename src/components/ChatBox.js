//import styled from "styled-components";
import { useState, useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import './Chat.css';
import { useHistory } from 'react-router-dom';
import { auth } from '../components/firebase'
//import { AuthProvider } from '../context/AuthContext'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'

const ChatBox = () => {
    
    const history = useHistory()
    const { user } = useAuth()
    const [loading, setLoading] =useState(true)

    const handleLogout = async () => {
        await auth.signOut()
        history.push("/")
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpeg', {type: 'image/jpeg'})
    }
    useEffect (() => {
        if(!user) {
            history.push("/")

            return;
        }
                //trying to get the exisiting user
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                'project-id': process.env.REACT_APP_CHAT_ENGINE_ID,
                'user-name': user.email,
                'user-secret': user.uid,
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email)
            formdata.append('username', user.email)
            formdata.append('secret', user.uid)

            getFile(user.photoURL)
                .then((avatar) => {
                    formdata.append('avatar', avatar, avatar.name)

                    axios.post('http://api.chatengine.io/users/',
                        formdata,
                        { headers: {'private-key': process.env.REACT_APP_CHAT_ENGINE_KEY}}
                    )
                        .then(() => setLoading(false))
                        .catch((error) => console.log(error))
                })
        })
    }, [user, history])


    if(!user || loading)  return 'Loading, please wait...'

    return(
        <>
        
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    Plantpedia chat
            </div>
            <div onClick={handleLogout} className='logout-tab'>
                    Logout
            </div>
        </div>
                <ChatEngine
                height='calc(80vh - 33px)'
                projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                userSecret={user.uid}
                onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                />
            
        </div>
        
        </>
    )
}


export default ChatBox;