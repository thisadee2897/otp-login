import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBTR3mZ-eEJUDmeQ1WjD0Ga-H6NrKSts_0",
    authDomain: "react-otp-77244.firebaseapp.com",
    projectId: "react-otp-77244",
    storageBucket: "react-otp-77244.appspot.com",
    messagingSenderId: "678844699079",
    appId: "1:678844699079:web:1abfc42b7d0bc0afc609e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
