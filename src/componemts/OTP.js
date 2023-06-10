import React, { useState } from 'react';
import '../css/OTPForm.css';
import firebase from './firebase';

export default function OTPForm() {
    const [otp, setOTP] = useState(['', '', '', '', '', '']);

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
        let phoneNumber = '+66' + otp.slice(1).join('');
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, recaptcha)
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
            <form className="otp-form" onSubmit={handleSubmit}>
                <div className="otp-inputs">
                    <input
                        key={0}
                        type="text"
                        maxLength="1"
                        value={otp[0]}
                        onChange={(e) => handleChange(e, 0)}
                    />
                    <input
                        key={1}
                        type="text"
                        maxLength="1"
                        value={otp[1]}
                        onChange={(e) => handleChange(e, 1)}
                    />
                    <input
                        key={2}
                        type="text"
                        maxLength="1"
                        value={otp[2]}
                        onChange={(e) => handleChange(e, 2)}
                    />
                    <input
                        key={3}
                        type="text"
                        maxLength="1"
                        value={otp[3]}
                        onChange={(e) => handleChange(e, 3)}
                    />
                    <input
                        key={4}
                        type="text"
                        maxLength="1"
                        value={otp[4]}
                        onChange={(e) => handleChange(e, 4)}
                    />
                    <input
                        key={5}
                        type="text"
                        maxLength="1"
                        value={otp[5]}
                        onChange={(e) => handleChange(e, 5)}
                    />
                </div>
                <button type="submit" className="otp-submit-btn">
                    ยืนยัน
                </button>
            </form>
            <div id="recaptcha"></div>
        </div>
    );
}
