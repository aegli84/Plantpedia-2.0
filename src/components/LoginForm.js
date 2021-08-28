import { FaFacebook, FaGoogle } from "react-icons/fa"
import 'firebase/app'
import { auth } from './firebase'
import firebase from 'firebase/app'
import './Chat.css'; 
import { motion } from 'framer-motion'
import { titleAnimation } from '../animations'


const LoginForm = () => {
    return (
        <div id='login-page' >
            <motion.div id='login-card' variants = {titleAnimation} 
                initial = "hidden" 
                animate = "show" >
                <h2 className='text-chat'>Plantpedia Live Chat!</h2>
                <br /> <br />
                <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <FaGoogle/> Sign in with Google
                </motion.div>
                <br /> <br />
                <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
                    className='login-button facebook'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FaFacebook/> Sign in with Facebook
                </motion.div>
            </motion.div>
        </div>

    )
}
export default LoginForm;