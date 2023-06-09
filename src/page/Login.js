import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../componemts/AuthContext';
import '../css/LoginFacebook.css';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('adminadminadminadminadminadmin');
    const { setIsLoggedIn } = useContext(AuthContext);

    const handleLogin = async () => {
        if (username === 'admin' && password === 'adminadminadminadminadminadmin') {
            setIsLoggedIn(true);
            navigate('/');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}
