import React, {useState} from "react";

// A props is an object, the content of which is decided by you in the parent component
export default function MessageInput(props) {
    const [currentMessage, setCurrentMessage] = useState('')
    const [disabled, setDisabled] = useState(false)

    function handleTextChange(event) {
        setCurrentMessage(event.target.value);
        setDisabled(false)
    }

    function handleSend() {
        props.onSend(currentMessage);
        setCurrentMessage('');
        setDisabled(true);
    }

    return (
        <div>
            <input 
                type = "text"
                data-testid = 'messageBox'
                value = {currentMessage}
                onChange = {handleTextChange}
            />
            <button
                data-testid = 'sendButton'
                onClick = {handleSend}
                disabled = {disabled}
            >
                Send
            </button>
        </div>
    )
}