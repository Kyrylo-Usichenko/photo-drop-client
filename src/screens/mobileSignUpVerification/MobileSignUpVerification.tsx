import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import {CodeWrapper, Heading, NumberWrapper, Number, Field, Resend, Wrapper} from './MobileSignUpVerificationStyles';
import {Container} from "../../components/shared/container/Container";
import Button from "../../components/shared/button/Button";
import {resendPhone, sendOtp} from "../../store/actions/user";
import {State} from "../../store";
import {useDispatch, useSelector } from 'react-redux';
import {AppDispatch} from "../../App";
import { useNavigate } from 'react-router-dom';
import {ChangeEvent} from "../../components/hooks/useInput";

const MobileSignUpVerification = () => {
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate()

    const phone = useSelector((state: State) => state.userReducer.phone)
    const isAuth = useSelector((state: State) => state.userReducer.isAuth)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)

    const input1 = useRef<HTMLInputElement>(null)
    const input2 = useRef<HTMLInputElement>(null)
    const input3 = useRef<HTMLInputElement>(null)
    const input4 = useRef<HTMLInputElement>(null)
    const input5 = useRef<HTMLInputElement>(null)
    const input6 = useRef<HTMLInputElement>(null)

    const [otp, setOtp] = useState<string[]>([])
    const [disabled, setDisabled] = useState(true)

    const onInputChange = () => {
        setOtp([input1.current!.value, input2.current!.value, input3.current!.value, input4.current!.value, input5.current!.value, input6.current!.value])
    }
    const resetInputs = () => {
        input1.current!.value = ''
        input2.current!.value = ''
        input3.current!.value = ''
        input4.current!.value = ''
        input5.current!.value = ''
        input6.current!.value = ''
        dispatch(resendPhone(phone))
        setOtp([])
    }

    useEffect(() => {
        if (otp.length === 6 && otp[1] !== '' && otp[2] !== '' && otp[3] !== '' && otp[4] !== '' && otp[5] !== '' && otp[6] !== '') {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [otp])
    useEffect(() => {
        if (isAuth){
            nav('/selfie')
        }
    })
    const jumpToNext = (e: any) =>  {
        if (e) {
            let max = e.target.getAttribute('maxLength');
            if (max && e.target.value.length >= max) {
                do {
                    e = e.target.nextElementSibling;
                }
                while (e && !(/number/.test(e.type)));
                if (e && /number/.test(e.type)) {
                    e.focus();
                }
            }
            if (e?.key === 'Backspace' || e?.key === 'Delete') {
                do {
                    e = e.target.previousSibling;
                }
                while (e && !(/number/.test(e.type)));
                if (e && /number/.test(e.type)) {
                    e.focus();
                }
            }
        }
    }
    return (
        <Container>
            <Wrapper>
                <Heading>What’s the code?</Heading>
                <NumberWrapper>Enter the code sent to
                    <Number> {phone}</Number>
                </NumberWrapper>
                <CodeWrapper>
                    <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input1} maxLength={1}/>
                    <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input2} maxLength={1}/>
                    <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input3} maxLength={1}/>
                    <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input4} maxLength={1}/>
                    <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input5} maxLength={1}/>
                    <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input6} maxLength={1}/>

                </CodeWrapper>
                <Resend onClick={resetInputs}>Resend code</Resend>
                <Button isLoading={isLoading} disabled={disabled} margin='19px 0 0' onClick={() => dispatch(sendOtp(phone, otp.join('')))}>Next</Button>
            </Wrapper>
        </Container>
    );
};

export default MobileSignUpVerification;
