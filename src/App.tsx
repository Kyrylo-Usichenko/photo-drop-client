import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/shared/header/Header";
import ProtectedRouter from "./components/shared/protectedRouter/ProtectedRouter";
import ProtectedRouterSecondOnboarding from "./components/shared/protectedRouter/ProtectedRouterSecondOnboarding";
import AddSelfie from "./screens/addSelfie/AddSelfie";
import Album from "./screens/album/Album";
import MobileSignUp from "./screens/mobileSignUp/MobileSignUp";
import MobileSignUpVerification from "./screens/mobileSignUpVerification/MobileSignUpVerification";
import MyProfile from "./screens/myProfile/MyProfile";
import AccountSetting from "./screens/myProfile/settings/accountSettings/AccountSetting";
import ChangeEmail from "./screens/myProfile/settings/accountSettings/ChangeEmail";
import ChangeNumber from "./screens/myProfile/settings/accountSettings/ChangeNumber";
import NameSettings from "./screens/myProfile/settings/nameSettings/NameSettings";
import NotificationSettings from "./screens/myProfile/settings/notificationSettings/NotificationSettings";
import PrivacyPolicy from "./screens/privacyPolicy/PrivacyPolicy";
import SecondOnboarding from "./screens/secondOnboarding/SecondOnboarding";
import TermsOfService from "./screens/termsOfService/TermsOfService";
import ThanksGiving from "./screens/thanksGiving/ThanksGiving";
import UserDashboard from "./screens/userDashboard/UserDashboard";
import store from "./store";

export type AppDispatch = typeof store.dispatch;

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<MobileSignUp />} />
            <Route
              path="/sms-verification"
              element={
                <div>
                  <Header logoToMainPage={false} backUrl="/login" />
                  <MobileSignUpVerification />
                </div>
              }
            />
            <Route
              path="/selfie"
              element={
                <ProtectedRouter>
                  <AddSelfie />
                </ProtectedRouter>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouter>
                  <UserDashboard />
                </ProtectedRouter>
              }
            />
            <Route
              path="/my-profile"
              element={
                <ProtectedRouter>
                  <MyProfile />
                </ProtectedRouter>
              }
            />
            <Route
              path="/notification-settings"
              element={
                <ProtectedRouter>
                  <Header backUrl />
                  <NotificationSettings />
                </ProtectedRouter>
              }
            />
            <Route
              path="/name-settings"
              element={
                <ProtectedRouter>
                  <Header backUrl />
                  <NameSettings />
                </ProtectedRouter>
              }
            />
            <Route
              path="/account-settings"
              element={
                <ProtectedRouter>
                  <Header backUrl="/dashboard" />
                  <AccountSetting />
                </ProtectedRouter>
              }
            />
            <Route
              path="/change-number"
              element={
                <ProtectedRouter>
                  <Header backUrl />
                  <ChangeNumber />
                </ProtectedRouter>
              }
            />
            <Route
              path="/change-email"
              element={
                <ProtectedRouter>
                  <Header backUrl />
                  <ChangeEmail />
                </ProtectedRouter>
              }
            />
            <Route
              path="/sms-verification-update"
              element={
                <>
                  <Header backUrl />
                  <MobileSignUpVerification update />
                </>
              }
            />
            <Route
              path="/album/:id"
              element={
                <ProtectedRouter>
                  <Album />
                </ProtectedRouter>
              }
            />
            <Route path="/terms-of-services" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route
              path="/onboarding"
              element={
                <ProtectedRouterSecondOnboarding>
                  <SecondOnboarding />
                </ProtectedRouterSecondOnboarding>
              }
            />
            <Route
              path="/thank-you"
              element={
                <ProtectedRouter>
                  <ThanksGiving />
                </ProtectedRouter>
              }
            />
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  background-color: #fff;
  height: 100%;
  position: relative;
`;
export default App;
