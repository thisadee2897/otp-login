import React, { useState } from 'react';
import '../css/OTP.css';
import HomePage from './homepage';

const OTPVerificationPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handlePhoneNumberChange = (e) => {
        const { value } = e.target;
        setPhoneNumber(value);
    };

    const handleOTPChange = (e) => {
        const { value } = e.target;
        setOTP(value);
    };

    const handleOTPSubmit = (e) => {
        e.preventDefault();
        // ตรวจสอบ OTP ที่ผู้ใช้ป้อน
        if (otp === '123456') {
            setLoggedIn(true);
        } else {
            alert('Invalid OTP');
        }
    };

    if (loggedIn) {
        return <HomePage />;
    }

    return (
        <div className="otp-container">
            <h2 className="otp-heading">OTP Verification</h2>
            <form onSubmit={handleOTPSubmit}>
                <input
                    type="text"
                    maxLength={10}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="otp-input"
                    placeholder="Enter Phone Number"
                />
                <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={handleOTPChange}
                    className="otp-input"
                    placeholder="Enter OTP"
                />
                <button type="submit" className="otp-button">
                    Verify
                </button>
            </form>
        </div>
    );
};

export default OTPVerificationPage;
