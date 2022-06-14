import React, {useEffect, useState} from 'react';
import {
    Agreement,
    EnterPhone,
    Filling,
    Flag,
    FlagWrapper,
    GetStarted,
    Links,
    PhoneWrapper,
    Terms
} from '../../components/header/HeaderStyles';
import {Container} from "../../components/container/Container";
import {Link, useNavigate} from 'react-router-dom';
import useToggle from "../../components/hooks/useToggle";
import PhoneSearch from "../../components/PhoneSearch/PhoneSearch";
import {CountryFromList, countryList} from "../../components/common/country-list";
import Header from "../../components/header/Header";
import {AppDispatch} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {sendPhone, setPhoneResponseCode} from "../../store/actions/user";
import {history, State} from "../../store";
import Loader from '../../components/loader/Loader';
import Button from "../../components/button/Button";




const MobileSignUp = () => {
    const [isPhoneSearchOpen, setIsPhoneSearchOpen] = useToggle();
    const [phone, setPhone] = useState('');
    const handlerOpenSearch = () => setIsPhoneSearchOpen(true);
    const handlerCloseSearch = () => setIsPhoneSearchOpen(false);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const status = useSelector((state: State) => state.userReducer.phoneResponseStatus)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    useEffect(() => {
        if (status === 'OK'){
            dispatch(setPhoneResponseCode(null))
            navigate('/sms-verification')
        }
    })
    const [selectedCountry, setSelectedCountry] = useState<CountryFromList | any>({
        country: 'United States',
        code: '1',
        iso: 'US',
        src: '/assets/flags/flag-for-united-states_1f1fa-1f1f8.png'
    });
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
            <Header/>

            <Container>
                <GetStarted>Let’s get started</GetStarted>
                <EnterPhone>Enter your phone number</EnterPhone>
                <Filling>
                    <FlagWrapper onClick={handlerOpenSearch}>
                        <Flag src={selectedCountry.src} alt=""/>
                        <img src="/images/arrow-down.svg" alt=""/>
                    </FlagWrapper>
                    <PhoneWrapper
                        value={'+' + selectedCountry.code + phone}
                        onChange={e => setPhone(e.target.value.substr(selectedCountry.code.length + 1))}
                        placeholder='+1 (555) 555-5555'
                        pattern="\+[0-9]{1,4}\s{1}[0-9]*"
                        type="tel"
                    />
                </Filling>
                <Button
                    isLoading={isLoading}
                    margin='20px 0 0'
                    onClick={() => dispatch(sendPhone(`+${selectedCountry.code+phone}`))}
                >
                    Create account
                </Button>
                <Agreement>
                    By proceeding, you consent to get WhatsApp or SMS messages, from PhotoDrop and its affiliates to the
                    number provided. Text “STOP” to 89203 to opt out.
                </Agreement>
                <Terms>
                    By continuing, you indicate that you have read and agree to our <Link to='/'><Links>Terms of
                    Use</Links></Link> & <Link
                    to='/'><Links>Privacy Policy</Links></Link>
                </Terms>
            </Container>
        </div>

    );
};

export default MobileSignUp;
