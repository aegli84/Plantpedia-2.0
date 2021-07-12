import styled from "styled-components";
import ChatBox from "../components/ChatBox";
import chatpage from '../assets/bgimg/chatpage.png'

const Chat = () => {
    return (
        <Div>
        {/* <h1>Live Chat</h1> */}
            <ChatBox/>
        </Div>
    )
}

const Div = styled.div `
    height: 95vh;   
    width: 100vw;
    background-image: url(${chatpage});
    background-repeat: no-repeat;
    background-size: cover;
    
`
export default Chat;