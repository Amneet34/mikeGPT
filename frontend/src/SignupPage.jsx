import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [newUser, setNewUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        
            const request = async (e) => {
                let req = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        username: newUser,
                        password: password
                    }),
                });
                let res = await req.json()
                console.log(res)

            }
            request()
            navigate("/")  
    }

    return(
    <div>  
        <div className="login-box">
            <form onSubmit={handleSubmit}>
                <h2>SignUp</h2>
                <div className="user-box">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
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
                {/* <button style={{ background: 'none', border: 'none' }} type="submit">
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Signup
                    </a>   
                </button>  */}
                    <button style={{ background: 'none', border: 'none' }} type="submit">
                        <a >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Create Account
                        </a>
                    </button> 
            </form>
        </div>
    </div>
        
    );
}

export default SignupPage;