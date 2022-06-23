import React from 'react';
import Header from './components/shared/header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MobileSignUp from "./screens/mobileSignUp/MobileSignUp";
import MobileSignUpVerification from "./screens/mobileSignUpVerification/MobileSignUpVerification";
import styled from "styled-components";
import store from "./store";
import {Provider} from 'react-redux';
import AddSelfie from "./screens/addSelfie/AddSelfie";
import ProtectedRouter from "./components/shared/protectedRouter/ProtectedRouter";
import UserDashboard from "./screens/userDashboard/UserDashboard";
import MyProfile from "./screens/myProfile/MyProfile";
import NotificationSettings from "./screens/myProfile/settings/notificationSettings/NotificationSettings";
import NameSettings from "./screens/myProfile/settings/nameSettings/NameSettings";


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
                                <Header backUrl='/'/>
                                <MobileSignUpVerification/>
                            </>
                        }/>
                        <Route path="/selfie" element={
                            <ProtectedRouter>
                                <AddSelfie/>
                            </ProtectedRouter>
                        }/>
                        <Route path="/dashboard" element={
                            <ProtectedRouter>
                                <UserDashboard/>
                            </ProtectedRouter>
                        }/>
                        <Route path="/my-profile" element={
                            <ProtectedRouter>
                                <MyProfile/>
                            </ProtectedRouter>
                        }/>
                        <Route path="/notification-settings" element={
                            <ProtectedRouter>
                                <Header backUrl='/my-profile'/>
                                <NotificationSettings/>
                            </ProtectedRouter>
                        }/>
                        <Route path="/name-settings" element={
                            <ProtectedRouter>
                                <Header backUrl='/my-profile'/>
                                <NameSettings/>
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
  overflow: hidden;
  height: 100%;
  position: relative;
`
export default App;
