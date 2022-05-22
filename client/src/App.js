import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import MessageInput from './components/MessageInput';

function App() {
  const [messages, setMessages] = useState([])

  const handleNewMessage = (message) => {
    setMessages([message, ...messages])
  }

  return (
    <div className="App">
      <MessageInput onSend={handleNewMessage}/>
      <ul>
        {messages.map(message => <li key={message}>{message}</li>)}
      </ul>
    </div>
  );
}

export default App;
