import React from 'react';
import Header from './components/header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MobileSignUp from "./pages/mobileSignUp/MobileSignUp";
import SmsVerification from "./pages/smsVerification/SmsVerification";
import styled from "styled-components";
import store from "./store";
import {Provider} from 'react-redux';
import AddSelfie from "./pages/addSelfie/AddSelfie";
import ProtectedRouter from "./components/common/ProtectedRouter";


export type AppDispatch = typeof store.dispatch;

function App() {
    return (
        <Wrapper>
            <Provider store={store}>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <MobileSignUp/>
                        </>
                    }/>
                    <Route path="/sms-verification" element={
                        <>
                            <Header backUrl='/'/><SmsVerification/>
                        </>
                    }/>
                    <Route path="/selfie" element={
                        <ProtectedRouter>
                            <AddSelfie/>
                        </ProtectedRouter>
                    }/>
                </Routes>
            </BrowserRouter>
            </Provider>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  max-width: 552px;
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
  height: 100%;
  //padding: 10px 0 10px;
`
export default App;
