/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import OTPVerificationPage from './homepage';
import '../css/Login.css';


const LoginPage = () => {
    console.log(useState);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        if (response.ok) {
            const responseData = await response.json();
            const accessToken = responseData.accessToken;
            alert('Login Successful');
            console.log('Login Successful');
            setLoggedIn(true);
        } else {
            alert('Invalid Credentials');
            console.log('Invalid Credentials');
        }
    };

    if (loggedIn) {
        return <OTPVerificationPage />;
    }

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
};

export default LoginPage;
