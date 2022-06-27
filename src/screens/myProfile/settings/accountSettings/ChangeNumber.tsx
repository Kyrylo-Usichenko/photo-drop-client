import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {AppDispatch} from "../../../../App";
import {CountryFromList, countryList} from "../../../../utils/country-list";
import useToggle from "../../../../components/hooks/useToggle";
import {State} from "../../../../store";
import {changePhone, setResponseCode} from "../../../../store/actions/user";
import PhoneSearch from "../../../../components/common/phoneSearch/PhoneSearch";
import { Container } from '../../../../components/shared/container/Container';
import Button from '../../../../components/shared/button/Button';
import {
    EnterPhone,
    Filling,
    Flag,
    FlagWrapper,
    GetStarted,
    PhoneWrapper,
    Wrapper
} from "../../../mobileSignUp/MobileSignUpStyles";

const ChangeNumber = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const nav = useNavigate();
    const [phone, setPhone] = useState('');
    const [selectedCountry, setSelectedCountry] = useState<CountryFromList | any>({
        country: 'United States',
        code: '1',
        iso: 'US',
        src: '/assets/flags/flag-for-united-states_1f1fa-1f1f8.png'
    });

    const [isPhoneSearchOpen, setIsPhoneSearchOpen] = useToggle();
    const handlerOpenSearch = () => setIsPhoneSearchOpen(true);
    const handlerCloseSearch = () => setIsPhoneSearchOpen(false);
    const status = useSelector((state: State) => state.userReducer.responseCode)
    useEffect(() => {
        if (status === 'OK'){
            dispatch(setResponseCode(null))
            navigate('/sms-verification-update')
        }
    })


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
            <Container>
                <Wrapper>
                    <GetStarted>Mobile number</GetStarted>
                    <EnterPhone>Update your number and we’ll send a verification code to this number.</EnterPhone>
                    <Filling>
                        <FlagWrapper onClick={handlerOpenSearch}>
                            <Flag src={selectedCountry.src} alt=""/>
                            <img src="/assets/icons/arrow-down.svg" alt=""/>
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
                        onClick={() =>
                        {
                            dispatch(changePhone(`+${selectedCountry.code+phone}`))
                        }}
                    >
                        Next
                    </Button>
                </Wrapper>
            </Container>
        </div>

    );
};

export default ChangeNumber;
