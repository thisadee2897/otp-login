import React from 'react';
import './css/App.css';
import Navbar from './componemts/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Customer from './page/Customer';
import Sale from './page/Sale';
import Car from './page/Car';
import Finance from './page/Finance';
import NotFound from './componemts/Notfound';
import Login from './page/Login';
import { AuthProvider } from './componemts/AuthContext';
import OTPForm from './componemts/OTP';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<OTPForm />} />
                    <Route path="/customers" element={<Customer />} />
                    <Route path="/sales" element={<Sale />} />
                    <Route path="/cars" element={<Car />} />
                    <Route path="/finances" element={<Finance />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
