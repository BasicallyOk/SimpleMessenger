import './App.css';
import React, {useState, useTransition} from 'react';
import MessageInput from './components/MessageInput';

function App() {
  const [name, setName] = useState('default')

  const handleNewRequest = (name) => {
    setName(name)
  }

  // If you are not showing an image, use fetch to retrieve data from backend
  return (
    <div className="App">
      <h4>AI FACE GENERATION</h4>
      <div>Enter name to generate face</div>
      <MessageInput onSend={handleNewRequest}/>
      <img src={`http://192.168.0.109:5000/exec/${name}`} />
    </div>
  );
}

export default App;
