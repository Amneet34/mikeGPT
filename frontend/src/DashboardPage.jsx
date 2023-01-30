import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
    const [input, setInput] = useState('');
    const [answer, setAnswer] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const navigate = useNavigate();

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
        if (answer.length > 0) {
            const randomIndex = Math.floor(Math.random() * answer.length);
            setAllMessages([...allMessages, { content: input, type: "user" }, { content: answer[randomIndex].content, type: "bot" }])
        }
        setInput('');
    }

    return (
        <div>
            <button className="button-15" onClick={() => navigate('/logout')}>Logout</button>

        <div className="chat-container">
            <div className="chat-header">
                MikeGPT
            </div>
            <div className="chat-messages">
                {allMessages.map((message, index) => (
                    <div key={index} className={`message ${message.type}`}>
                        <div className="message-content">
                            {message.content}
                        </div>
                    </div>
                ))}
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
    </div>
    );
}
export default DashboardPage;
