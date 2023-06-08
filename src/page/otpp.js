import React, { useState } from 'react';
import axios from 'axios';
import '../css/OTP.css';
import HomePage from './homepage';

const OTPVerificationPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [otpSent, setOTPSent] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handlePhoneNumberChange = (e) => {
        const { value } = e.target;
        setPhoneNumber(value);
    };

    const handleOTPChange = (e) => {
        const { value } = e.target;
        setOTP(value);
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/sendotp', {
                phoneno: phoneNumber,
            });
            if (response.status === 200 && response.data.RespCode === 200) {
                setOTPSent(true);
            } else {
                alert('เกิดข้อผิดพลาดในการส่ง OTP');
            }
        } catch (error) {
            console.log(error);
            alert('เกิดข้อผิดพลาดบางอย่าง!');
        }
    };

    const handleOTPSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/verifyotp', {
                phoneno: phoneNumber,
                otp,
            });
            if (response.status === 200 && response.data.RespCode === 200) {
                setLoggedIn(true);
            } else {
                alert('OTP ไม่ถูกต้อง');
            }
        } catch (error) {
            console.log(error);
            alert('เกิดข้อผิดพลาดบางอย่าง!');
        }
    };

    if (loggedIn) {
        return <HomePage />;
    }

    return (
        <div className="otp-container">
            <h2 className="otp-heading">ยืนยันรหัส OTP</h2>
            {!otpSent ? (
                <form onSubmit={handleSendOTP}>
                    <input
                        type="text"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="otp-input"
                        placeholder="ใส่หมายเลขโทรศัพท์"
                    />
                    <button type="submit" className="otp-button">
                        ส่ง OTP
                    </button>
                </form>
            ) : (
                <form onSubmit={handleOTPSubmit}>
                    <input
                        type="text"
                        maxLength={6}
                        value={otp}
                        onChange={handleOTPChange}
                        className="otp-input"
                        placeholder="ใส่รหัส OTP"
                    />
                    <button type="submit" className="otp-button">
                        ยืนยัน
                    </button>
                </form>
            )}
        </div>
    );
};

export default OTPVerificationPage;
