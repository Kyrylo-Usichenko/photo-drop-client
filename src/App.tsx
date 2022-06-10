import React from 'react';
import Header from './components/header/Header';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import MobileSignUp from "./pages/mobileSignUp/MobileSignUp";
import SmsVerification from "./pages/smsVerification/SmsVerification";
import styled from "styled-components";

function App() {
    return (
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <MobileSignUp/>
                        </>
                    }/>
                    <Route path="/sms-verification" element={
                        <>
                            <Header/><SmsVerification/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  max-width: 552px;
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
  height: 100%;
  padding: 10px 0 10px;
`
export default App;
