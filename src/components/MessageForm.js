//logic required to send and receive messages
import { useState } from "react"
import { sendMessage, isTyping } from "react-chat-engine"
import { AiOutlinePicture } from "react-icons/ai"
import { MdSend } from "react-icons/md"

const MessageForm = (props) => {
    const [value, setValue] =useState('')
    const { chatId, creds } = props;
    
    const handleSubmit = (event) => {
        //this will prevent the browser from refreshing on submit
        event.preventDefault();

        //trim text of the msg
        const text = value.trim();

        if(text.length > 0) {
            sendMessage(creds, chatId, { text });
        }
        setValue(''); // this resets the value (msg inputed) to an empty string (deletes it from the input bar)
    };

    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
    }

    
    const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
    };


    return(
        <form className ='message-form' onSubmit={handleSubmit}>
            <input
                className = 'message-input'
                placeholder = 'Send a message...'
                value ={value}
                onChange = {handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor="upload-button">
                <span className = 'image-button'>
                    <AiOutlinePicture className = 'picture-icon'/>
                </span>
            </label>
            <input 
                type='file'
                multiple={false}
                id='upload-button'
                style={{display: 'none'}}
                onChange ={handleUpload.bind(this)}
            />
            <button 
                type= 'submit' 
                className = 'send-button'>
                    <MdSend className = 'send-icon'/>
            </button>
        </form>
    )
}
export default MessageForm;