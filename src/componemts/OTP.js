import React, { useState } from 'react';
import '../css/OTPForm.css';
import firebase from './firebase';

export default function OTPForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOTP] = useState(['', '', '', '', '', '']);
    const [showOTPInput, setShowOTPInput] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneNumberSubmit = (event) => {
        event.preventDefault();
        if (phoneNumber.length === 10) {
            setShowOTPInput(true);
            let fullPhoneNumber = '+66' + phoneNumber.slice(1);
            alert(fullPhoneNumber);
        } else {
            alert('Please enter a valid phone number.');
        }
    };

    const handleChange = (event, index) => {
        const value = event.target.value;
        const updatedOTP = [...otp];
        updatedOTP[index] = value;
        setOTP(updatedOTP);
        console.log(updatedOTP);
        if (value.length === 1 && index < 5) {
            const nextInput = event.target.nextElementSibling;
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
        let fullPhoneNumber = '+66' + phoneNumber.slice(1);
        alert(fullPhoneNumber);
        firebase
            .auth()
            .signInWithPhoneNumber(fullPhoneNumber, recaptcha)
            .then(function (e) {
                let code = prompt('Enter the OTP', '');
                if (code == null) return;
                e.confirm(code)
                    .then(function (result) {
                        document.querySelector('label').textContent =
                            result.user.phoneNumber + ' Number verified';
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        console.log(otp.join(''));
    };

    return (
        <div className="otp-container">
            <h2>ยืนยัน OTP</h2>
            {!showOTPInput && (
                <form className="phone-number-form" onSubmit={handlePhoneNumberSubmit}>
                    <input
                        className="phone-number-form-input"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <button type="submit" className="otp-submit-btn">
                        ยืนยัน
                    </button>
                </form>
            )}
            {showOTPInput && (
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
            )}
            <div id="recaptcha"></div>
        </div>
    );
}
