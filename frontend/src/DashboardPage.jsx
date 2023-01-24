import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    }
    return(
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">
                        {message}
                    </div>
                ))}
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
                <input
                    className="chat-input"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button className="chat-submit" type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default DashboardPage;