const MyMessage = ({ message }) => {
    //this checks if the msg is text or image (this if statement is for rendering img msg)
    if(message.attachments && message.attachments.lenght > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className='message-image'
                style ={{float: 'right'}}
            />
        )
    }

    return(
        <div className='message' style ={{float: 'right', marginRight: '18px', color: 'white', backgroundColor:'#3b2a50'}}>
            {message.text}
        </div>
    )
}
export default MyMessage;