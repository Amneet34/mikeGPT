import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/users/${username}`);
            const data = await response.json();
            if (data.username === username) {
                navigate('/dashboard');
            } else {
                navigate('/');
            }
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
            console.log("No Such Route");
        }
    }

    return (
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="user-box">
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <label>Password</label>
                </div >
                <button style={{ background: 'none', border: 'none', padding: '30px' }} type="submit">
                    <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        login
                    </a></button>
                <button style={{ background: 'none', border: 'none' }} type="submit" onClick={() => navigate('/Signup')}>
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Signup
                    </a>
                </button>
            </form>
        </div>
    );
}

export default LoginPage;

