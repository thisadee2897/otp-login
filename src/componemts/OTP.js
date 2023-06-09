import React, { useState } from 'react';
import '../css/OTPForm.css';

export default function OTPForm() {
    const [otp, setOTP] = useState(['', '', '', '', '', '']);

    const handleChange = (event, index) => {
        const value = event.target.value;
        const updatedOTP = [...otp];
        updatedOTP[index] = value;
        setOTP(updatedOTP);

        if (value.length === 1 && index < 5) {
            const nextInput = event.target.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // ตรวจสอบ OTP ที่ป้อนข้อมูลที่นี่
        console.log(otp.join('')); // แสดงค่า OTP ที่เก็บไว้ในรูปแบบสตริง
    };

    return (
        <div className="otp-container">
            <h2>ยืนยัน OTP</h2>
            <form className="otp-form" onSubmit={handleSubmit}>
                <div className="otp-inputs">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                        />
                    ))}
                </div>
                <button type="submit" className="otp-submit-btn">
                    ยืนยัน
                </button>
            </form>
        </div>
    );
}
