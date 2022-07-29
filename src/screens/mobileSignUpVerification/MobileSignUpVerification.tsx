import { useEffect, useState } from "react";
//@ts-ignore
import ReactCodeInput from "react-code-input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../App";
import Button from "../../components/shared/button/Button";
import { Container } from "../../components/shared/container/Container";
import { State } from "../../store";
import {
  redirectUser,
  resendPhone,
  resendUpdatePhone,
  sendOtp,
  sendUpdateOtp,
  setLoading
} from "../../store/actions/user";
import {
  Heading,
  Number,
  NumberWrapper,
  Resend,
  Wrapper
} from "./MobileSignUpVerificationStyles";

interface Props {
  update?: boolean;
  secondOnboarding?: boolean;
}

const MobileSignUpVerification = ({
  update,
  secondOnboarding,
}: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  const phone = useSelector((state: State) => state.userReducer.phone);
  const isLoading = useSelector((state: State) => state.userReducer.isLoading);
  const redirectToUrl = useSelector(
    (state: State) => state.userReducer.redirectToUrl
  );
  const user = useSelector((state: State) => state.userReducer.user);
  const [otp, setOtp] = useState<string>("");

  const resetInputs = () => {
    update ? dispatch(resendUpdatePhone(phone)) : dispatch(resendPhone(phone));
    setOtp("");
  };
  const onNextClick = () => {
    dispatch(update ? sendUpdateOtp(phone, otp) : sendOtp(phone, otp));
  };
    useEffect(() => {
      if(user){
 if (user && user.selfie?.photo_url) {
   secondOnboarding ? nav("/onboarding") : nav("/dashboard");
   dispatch(setLoading(false));
 } else {
   secondOnboarding ? nav("/onboarding") : nav("/dashboard");
   dispatch(setLoading(false));
 }
      }
    }, [user]);


  useEffect(() => {
    dispatch(redirectUser(null));
    if (redirectToUrl) {
      secondOnboarding ? nav("/onboarding") : nav(redirectToUrl);
    }
  }, [user, redirectToUrl]);

  useEffect(() => {
    if (phone === "" && update) {
      nav("/account-settings");
    }
    if (phone === "" && !update) {
      
      secondOnboarding ? nav("/login-onboarding") : nav("/login");
    }
  });
  const props = {
    className: "reactCodeInput",

    inputStyle: {
      width: "45px",
      height: "40px",
      background: "#F4F4F4",
      border: "1px solid #EEEEEE",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      outline: "none",
      WebkitAppearance: "none",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "21px",
    },
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Heading>What’s the code?</Heading>
          <NumberWrapper>
            Enter the code sent to
            <Number> {phone}</Number>
          </NumberWrapper>

          <
            // @ts-ignore
            ReactCodeInput
            name="resetPassword"
            inputMode="numeric"
            fields={6}
            type="text"
            {...props}
            onChange={(e: any) => setOtp(e)}
          />
          <Resend onClick={resetInputs}>Resend code</Resend>
          <Button
            isLoading={isLoading}
            disabled={otp.length < 6}
            margin="20px 0 0"
            onClick={onNextClick}
          >
            Next
          </Button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default MobileSignUpVerification;
