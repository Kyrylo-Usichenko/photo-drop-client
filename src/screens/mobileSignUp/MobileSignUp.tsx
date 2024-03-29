import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./mobileSignUpStyles.css";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../App";
import PhoneSearch from "../../components/common/phoneSearch/PhoneSearch";
import useToggle from "../../components/hooks/useToggle";
import Button from "../../components/shared/button/Button";
import { Container } from "../../components/shared/container/Container";
import Header from "../../components/shared/header/Header";
import { State } from "../../store";
import { sendPhone } from "../../store/actions/user";
import { CountryFromList, countryList } from "../../utils/country-list";

import {
  Agreement,
  EnterPhone,
  Filling,
  Flag,
  FlagWrapper,
  GetStarted,
  Links,
  PhoneWrapper,
  Terms,
  Wrapper,
} from "./MobileSignUpStyles";
type Props = {
  secondOnboarding?: boolean;
};
const MobileSignUp = ({ secondOnboarding }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  const [isPhoneSearchOpen, setIsPhoneSearchOpen] = useToggle();
  const handlerOpenSearch = () => setIsPhoneSearchOpen(true);
  const handlerCloseSearch = () => setIsPhoneSearchOpen(false);
  const redirectToUrl = useSelector(
    (state: State) => state.userReducer.redirectToUrl
  );
  const auth = useSelector((state: State) => state.userReducer.isAuth);
  const [phone, setPhone] = useState<any>("");

  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryFromList>({
    country: "United States",
    code: "1",
    iso: "US",
    src: "/assets/flags/flag-for-united-states_1f1fa-1f1f8.png",
  });
  const onCreateAccountClick = async () => {
    try {
      setLoading(true);

      await dispatch(sendPhone(`+${(selectedCountry.code + phone).replace(/\D/g, "")}`));
      secondOnboarding
        ? nav("/sms-verification-onboarding")
        : nav("/sms-verification");

      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth) {
      if (!secondOnboarding) {
        nav("/dashboard");
      }
    }
  }, [auth]);

  // useEffect(() => {
  //   redirectToUrl && nav(redirectToUrl);
  // }, [redirectToUrl]);

  if (isPhoneSearchOpen) {
    return (
      <PhoneSearch
        handlerCloseSearch={handlerCloseSearch}
        countryList={countryList}
        setCountry={setSelectedCountry}
        setPhone={setPhone}
      />
    );
  }

  return (
    <div>
      <div>
        <Header logoToMainPage={false} />
        <Container>
          <Wrapper>
            <GetStarted>Let’s get started</GetStarted>
            <EnterPhone>Enter your phone number</EnterPhone>
            <Filling>
              <FlagWrapper onClick={handlerOpenSearch}>
                <Flag src={selectedCountry.src} alt="" />
                <img src={"/assets/icons/arrow-down.svg"} alt="" />
              </FlagWrapper>
              <PhoneWrapper
                value={"+" + selectedCountry.code + phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value.substr(selectedCountry.code.length + 1)
                  )
                }
                placeholder="+1 (555) 555-5555"
                pattern="\+[0-9]{1,4}\s{1}[0-9]*"
                type="tel"
                autoComplete="on"
              />
              {/* <PhoneInput
                international
                countryCallingCodeEditable
                mask="(+1) 999 999 9999"
                value={phone}
                defaultCountry="US"
                // country='RU'
                type="tel"
                autoComplete="tel"
                pattern="[+]{1}[0-9]{11,14}"
                onChange={setPhone}
              />
              <input
                pattern="[+]{1}[0-9]{11,14}"
                type="tel"
                autoComplete="tel"
              /> */}
            </Filling>

            <Button
              isLoading={loading}
              margin="20px 0 0"
              onClick={onCreateAccountClick}
            >
              Create account
            </Button>
            <Agreement>
              By proceeding, you consent to get WhatsApp or SMS messages, from
              PhotoDrop and its affiliates to the number provided. Text “STOP”
              to 89203 to opt out.
            </Agreement>
            <Terms>
              By continuing, you indicate that you have read and agree to our{" "}
              <Link to="/terms-of-services">
                <Links>Terms of Use</Links>
              </Link>{" "}
              &{" "}
              <Link to="/privacy">
                <Links>Privacy Policy</Links>
              </Link>
            </Terms>
          </Wrapper>
        </Container>
      </div>
    </div>
  );
};

export default MobileSignUp;
