import styled from "styled-components";
import {Link } from "react-router-dom";


const ChatCard=styled.div`
    width:200px;
    height:22vh;
    background-color: #725490;
    border-radius: 2rem;
    position: relative;
    margin:auto;
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:22vw;
    height:20vh;
}
@media (max-width: 377px) {
    grid-template-columns: auto auto ;
    width:30vw;
    height:14vh;
    
}
`
const Button=styled.button`
    height:7vh;
    width: 200px;
    margin-top: 2vh;
    background-color: #323144;
    border-radius: 0 0 2rem 2rem;
    color: white;
    font-size: 1.5rem;
&:hover {
        background-color: #83a46f;
    }
@media (max-width: 770px) {
    grid-template-columns: auto auto;
    width:22vw;
	font-size: 1.3rem;
}
@media (max-width: 377px) {
    grid-template-columns: auto auto;
    width:30vw;
    height:5vh;
	font-size: 1.2rem;
}
`

const Thumbnail = styled.div`
    width:100px;
    height: 11vh;
    background-color: white;
    border-radius: 50%;
    margin-top: 2vh;
    margin-left: 51px;
@media (max-width: 770px) {
    width:14vw;
    height: 10vh;
    margin-left: 4vw;
    
}
@media (max-width: 377px) {
    width:15vw;
    height: 7vh;
    margin-left: 8vw;
    margin-top: 2vh;
}
`
const Section1=styled.div`
    display: flex;
`

const Section2=styled.div`
    margin: auto;
    justify-items: center;
`

const ImageChat = styled.iframe`
    width:80px;
    margin-left: 9px;
    margin-top: 9px;
    height: 9vh;
    background-color: white;
    border-radius: 50%;
    border-style:none;
    pointer-events: none;

@media (max-width: 770px) {
    width:13vw;
    
}
@media (max-width: 377px) {
    width:12vw;
    height: 5vh;
}
`

const ChatButton = () => {
    return (
        <ChatCard>
            <Section1>
            <Thumbnail>
            <ImageChat src="https://giphy.com/embed/26FPJGjhefSJuaRhu"></ImageChat>
            </Thumbnail>
            </Section1>

            <Section2>
                <Link to="/Chat">
                    <Button 
                            className = "button"
                            id = "submit" 
                            type = "submit" 
                            value = "submit">
                        Live Chat
                    </Button>
                </Link>
            </Section2>
        </ChatCard>
    );
};
export default ChatButton;