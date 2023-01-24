import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [newUser, setNewUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return(
    <div>  
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <h2>SignUp</h2>
                <div className="user-box">
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <input type="text" value={newUser} onChange={e => setNewUser(e.target.value)} required />
                    <label>Username</label>
                </div >
                <div className="user-box">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <label>Password</label>
                </div >
                <button style={{ background: 'none', border: 'none' }} type="submit" onClick={() => navigate('/')}>
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
    </div>
        
    );
}

export default SignupPage;