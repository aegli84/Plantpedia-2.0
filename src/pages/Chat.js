import styled from "styled-components";
import ChatBox from "../components/ChatBox";
import chatpage from '../assets/bgimg/chatpage.png'
import LoginForm from '../components/LoginForm'
import { AuthProvider } from '../context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


const Chat = () => {
    return (
        <>
        <Div >
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route path="/chats" component={ChatBox} />
                        <Route path="/" component={LoginForm}/>
                    </Switch>
                </AuthProvider>
        </Router>
        </Div>
        </>
    )
}

const Div = styled.div `
    height: 100vh;   
    width: 100vw;
    background-image: url(${chatpage});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 3rem;
@media (max-width: 768px) {
    height: 83vh;
    padding-top: 0rem;
}

@media (max-width: 480px) {
    height: 85vh;
}
`
export default Chat;