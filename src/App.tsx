import React from 'react';
import Header from './components/header/Header';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import MobileSignUp from "./pages/mobileSignUp/MobileSignUp";
import SmsVerification from "./pages/smsVerification/SmsVerification";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header/><MobileSignUp/>
                        </>
                    }/>
                    <Route path="/sms-verification" element={
                        <>
                            {/* eslint-disable-next-line react/jsx-no-undef */}
                            <Header/><SmsVerification/>
                        </>
                    }/>
                </Routes>

            </BrowserRouter></div>
    );
}

export default App;
