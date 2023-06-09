import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../componemts/AuthContext';
import '../css/Login.css'
export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleLogin = async () => {
        if (username === 'odin.dev' && password === 'adminadmin') {
            setIsLoggedIn(true);
            navigate('/');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="heading">Login</h2>
                <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="button" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}