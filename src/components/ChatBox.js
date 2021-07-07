import styled from "styled-components";

const ChatBox = () => {
    return(
        <>
            <Div>
                <div>
                    <h1>Welcome to our live chat! </h1>
                </div>
                <Chat>

                </Chat>
                
        {/* <ul id = "user-channel-list">
            <li id="switch-btn" class = "btn btn-pink" onclick="switchHandler()">
                
            </li>
            <ul id= "active-list">
            </ul>
        </ul> */}
                <section id="chat-view">
                    <ul id="chat-box"></ul>
                        <section>
                            <input id = 'msg-box' placeholder="Say something"></input>
                            <button id = "send-btn" onclick="clickHandler()">Send</button>
                        </section>
                </section>
            </Div>
        </>
    )
}

const Div = styled.div`
    height: 100vh;
    width: 100vw;
    display: inline;
    align-content: center;
    justify-content: center;
    text-align: center;
    margin-top: 100vh;
    
    /* h1{
        width: 50vw;
        height: 5vh;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: whitesmoke;
        background: rgba( 197, 197, 196, 0.25 );
        box-shadow: 0 8px 102px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 30px );
        -webkit-backdrop-filter: blur( 30px );
        border-radius: 10px;
        border: 2px solid rgba( 255, 255, 255, 0.18 );
        
    } */
    
`
const Chat = styled.div `
    width: 70vw;
    height: 64vh;
    background: rgba( 197, 197, 196, 0.25 );
    box-shadow: 0 8px 102px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 30px;
    border: 2px solid rgba( 255, 255, 255, 0.18 );
    margin: 4rem 0rem 0rem 15rem;
`

export default ChatBox;