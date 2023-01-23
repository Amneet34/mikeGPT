import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
<<<<<<< HEAD

        console.log(`Username: ${username} Password: ${password}`);
=======
        const handleSubmit = (e) => {
            e.preventDefault()
            fetch(`http://localhost:3000/users`)
                .then(res => res.json())
                .then(data => {
                    if (data.username === true) navigate('/dashboard')

                    else if (data.username === false) {
                        setCurrentStaff(data)
                        navigate('/')
                    }

                })
                .catch(() => console.log("No Such Route"))
        }
>>>>>>> 5b8011f (mix and match)
        navigate("/dashboard")
    };

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
                    <a >
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

