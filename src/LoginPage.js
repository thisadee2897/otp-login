import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            alert('Login Successful');
        } else {
            alert('Invalid Credentials');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.snowContainer}>

            </div>
            <div style={styles.card}>
                <h2 style={styles.heading}>Login</h2>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    style={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button style={styles.button} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#D1E9FF',
    },
    snowContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        width: 300,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#374151',
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 12,
        padding: 8,
        borderRadius: 4,
        border: '1px solid #E5E7EB',
        fontSize: 16,
    },
    button: {
        width: '100%',
        backgroundColor: '#3B82F6',
        color: '#FFFFFF',
        padding: 8,
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    // เพิ่มส่วน CSS ที่คุณต้องการเพิ่มเติม
    '.App': {
        textAlign: 'center',
    },
    '.App-logo': {
        height: '40vmin',
        pointerEvents: 'none',
    },
    '@media (prefers-reduced-motion: no-preference)': {
        '.App-logo': {
            animation: 'App-logo-spin infinite 20s linear',
        },
    },
    '.App-header': {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
    },
    '.App-link': {
        color: '#61dafb',
    },
    '@keyframes App-logo-spin': {
        from: {
            transform: 'rotate(0deg)',
        },
        to: {
            transform: 'rotate(360deg)',
        },
    },
};

export default LoginPage;
