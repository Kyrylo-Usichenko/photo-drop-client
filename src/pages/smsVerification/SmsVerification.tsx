import React, {useEffect, useRef, useState} from 'react';
import {CodeWrapper, Heading, NumberWrapper, Number, Field, Resend } from './SmsVerificationStyles';
import {Container} from "../../components/container/Container";
import Button from "../../components/button/Button";

const SmsVerification = () => {
    const input1 = useRef(null)
    const input2 = useRef(null)
    const input3 = useRef(null)
    const input4 = useRef(null)
    const input5 = useRef(null)
    const input6 = useRef(null)
    const [array, setArray] = useState([])
    const [disabled, setDisabled] = useState(true)
    const onInputChange = () => {
        // @ts-ignore
        setArray([input1.current.value, input2.current.value, input3.current.value, input4.current.value, input5.current.value, input6.current.value])
    }
    const resetInputs = () => {
        // @ts-ignore
        input1.current.value = null
        // @ts-ignore
        input2.current.value = null
        // @ts-ignore
        input3.current.value = null
        // @ts-ignore
        input4.current.value = null
        // @ts-ignore
        input5.current.value = null
        // @ts-ignore
        input6.current.value = null
        setArray([])
    }

    useEffect(() => {
        if (array.length === 6 && array[1] !== '' && array[2] !== '' && array[3] !== '' && array[4] !== '' && array[5] !== '' && array[6] !== '' ){
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }, [array])
    console.log(array)
    return (
        <Container>
            <Heading>What’s the code?</Heading>
            <NumberWrapper>Enter the code sent to
                <Number> +1 123-456-7890</Number>
            </NumberWrapper>
            <CodeWrapper>
                <Field onChange={onInputChange} ref={input1} maxLength={1}/>
                <Field onChange={onInputChange} ref={input2} maxLength={1}/>
                <Field onChange={onInputChange} ref={input3} maxLength={1}/>
                <Field onChange={onInputChange} ref={input4} maxLength={1}/>
                <Field onChange={onInputChange} ref={input5} maxLength={1}/>
                <Field onChange={onInputChange} ref={input6} maxLength={1}/>

            </CodeWrapper>
            <Resend onClick={resetInputs}>Resend code</Resend>
            <Button disabled={disabled} margin='19px 0 0'>Next</Button>
        </Container>
    );
};

export default SmsVerification;
