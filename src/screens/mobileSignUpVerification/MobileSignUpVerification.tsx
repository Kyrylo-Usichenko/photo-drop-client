import React, {useEffect, useRef, useState} from 'react';
import {CodeWrapper, Heading, NumberWrapper, Number, Field, Resend, Wrapper} from './MobileSignUpVerificationStyles';
import {Container} from "../../components/shared/container/Container";
import Button from "../../components/shared/button/Button";
import {
    redirectUser,
    resendPhone,
    resendUpdatePhone,
    sendOtp,
    sendUpdateOtp, setLoading,
} from "../../store/actions/user";
import {State} from "../../store";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from "../../App";
import {useNavigate} from 'react-router-dom';

interface Props {
    update?: boolean
}

const MobileSignUpVerification = ({update}: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate()
    const phone = useSelector((state: State) => state.userReducer.phone)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const redirectToUrl = useSelector((state: State) => state.userReducer.redirectToUrl)
    const user = useSelector((state: State) => state.userReducer.user)

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
        update ? dispatch(resendUpdatePhone(phone)) : dispatch(resendPhone(phone))
        setOtp([])
    }
    const onNextClick = () => {
        dispatch(update ? sendUpdateOtp(phone, otp.join('')) : sendOtp(phone, otp.join('')))
    }
    const jumpToNext = (e: any) => {
        if (e) {
            if (e.target.value.length > 1) {
                e.target.value = e.target.value[0]
            }
            if (e.target.value.length >= 1) {
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

    useEffect(() => {
        if (otp.length === 6 && otp[1] !== '' && otp[2] !== '' && otp[3] !== '' && otp[4] !== '' && otp[5] !== '' && otp[6] !== '') {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [otp])

    // useEffect(() => {
    //     if(user && user.selfie?.photo_url) {
    //         nav('/dashboard')
    //         dispatch(setLoading(false))
    //     } else {
    //         nav('/selfie')
    //         dispatch(setLoading(false))
    //     }
    // }, [user])

    useEffect(() => {
        dispatch(redirectUser(null))
        if (redirectToUrl) nav(redirectToUrl)

    }, [user, redirectToUrl])


    // useEffect(() => {
    //     if (phone === '' && update) {
    //         nav('/account-settings')
    //     }
    //     if (phone === '' && !update) {
    //         nav('/login')
    //     }
    // })

    return (
        <div>
            <Container>
                <Wrapper>
                    <Heading>What’s the code?</Heading>
                    <NumberWrapper>Enter the code sent to
                        <Number> {phone}</Number>
                    </NumberWrapper>
                    <CodeWrapper>
                        <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input1}
                               maxLength={0}/>
                        <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input2}
                               maxLength={1}/>
                        <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input3}
                               maxLength={1}/>
                        <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input4}
                               maxLength={1}/>
                        <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input5}
                               maxLength={1}/>
                        <Field type='number' onChange={onInputChange} onKeyUp={jumpToNext} size={1} ref={input6}
                               maxLength={1}/>
                    </CodeWrapper>
                    <Resend onClick={resetInputs}>Resend code</Resend>
                    <Button
                        isLoading={isLoading}
                        disabled={disabled}
                        margin='20px 0 0'
                        onClick={onNextClick}>
                        Next
                    </Button>
                </Wrapper>
            </Container>
        </div>

    );
};

export default MobileSignUpVerification;
