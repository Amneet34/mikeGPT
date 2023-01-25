import { useState, useEffect } from 'react';

function DashboardPage() {
    const [messages, setMessages] = useState([]);
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        const request = async () => {
            let req = await fetch("http://localhost:3000/answers")
            let res = await req.json()
            setAnswer(res)
        }
        request()
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        setMessages([...messages, input]);
        setInput('');
        if (answer.length > 0) {
            const randomIndex = Math.floor(Math.random() * answer.length);
            setResponse(answer[randomIndex]);
        }
    }

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">
                        {message}
                    </div>
                ))}
                {answer.length > 0 && (
                    <div className="chat-response">
                        {response.content}
                    </div>
                )}
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
                <input
                    className="chat-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="chat-submit" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}
export default DashboardPage;
