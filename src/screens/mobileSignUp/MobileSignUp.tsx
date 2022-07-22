import React, {useEffect, useState} from 'react';
import {Container} from "../../components/shared/container/Container";
import {Link, useNavigate} from 'react-router-dom';
import useToggle from "../../components/hooks/useToggle";
import PhoneSearch from "../../components/common/phoneSearch/PhoneSearch";
import {CountryFromList, countryList} from "../../utils/country-list";
import Header from "../../components/shared/header/Header";
import {AppDispatch} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {sendPhone} from "../../store/actions/user";
import {State} from "../../store";
import Button from "../../components/shared/button/Button";
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
    Wrapper
} from "./MobileSignUpStyles";

const MobileSignUp = () => {
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();
    const [isPhoneSearchOpen, setIsPhoneSearchOpen] = useToggle();
    const handlerOpenSearch = () => setIsPhoneSearchOpen(true);
    const handlerCloseSearch = () => setIsPhoneSearchOpen(false);
    const redirectToUrl = useSelector((state: State) => state.userReducer.redirectToUrl)
    const auth = useSelector((state: State) => state.userReducer.isAuth)
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<CountryFromList>({
        country: 'United States',
        code: '1',
        iso: 'US',
        src: '/assets/flags/flag-for-united-states_1f1fa-1f1f8.png'
    });

    const onCreateAccountClick = async () => {
        setLoading(true)
        await dispatch(sendPhone(`+${(selectedCountry.code + phone).replace(/\D/g, '')}`))
        setLoading(false)
    }

    useEffect(() => {
        if (auth) nav('/dashboard')
    }, [auth])

    useEffect(() => {
        redirectToUrl && nav(redirectToUrl)
    }, [redirectToUrl])

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
                />
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
