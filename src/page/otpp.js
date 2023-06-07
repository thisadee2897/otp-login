import React, { useState } from 'react';

const OTPVerificationPage = () => {
    const [otp, setOTP] = useState('');

    const handleOTPChange = (e) => {
        const { value } = e.target;
        setOTP(value);
    };

    const handleOTPSubmit = (e) => {
        e.preventDefault();
        // ตรวจสอบ OTP ที่ผู้ใช้ป้อน
    };

    return (
        <div style={styles.container}>
            <h2>OTP Verification</h2>
            <form onSubmit={handleOTPSubmit}>
                <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={handleOTPChange}
                    style={styles.input}
                    placeholder="Enter OTP"
                />
                <button type="submit" style={styles.button}>
                    Verify
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        width: '200px',
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default OTPVerificationPage;
