import React from 'react';
import Header from "../../components/header/Header";
import {
    Agreement,
    Button,
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
import {Link} from 'react-router-dom';

const MobileSignUp = () => {
    return (
        <Container>
            <GetStarted>Let’s get started</GetStarted>
            <EnterPhone>Enter your phone number</EnterPhone>
            <Filling>
                <FlagWrapper>
                    <Flag src="/images/usa.svg" alt=""/>
                    <img src="/images/arrow-down.svg" alt=""/>
                </FlagWrapper>
                <PhoneWrapper type='number' placeholder='+1 (555) 555-5555'/>
            </Filling>
            <Button>
                Create account
            </Button>
            <Agreement>
                By proceeding, you consent to get WhatsApp or SMS messages, from PhotoDrop and its affiliates to the
                number provided. Text “STOP” to 89203 to opt out.
            </Agreement>
            <Terms>
                By continuing, you indicate that you have read and agree to our <Link to='/'><Links>Terms of Use</Links></Link> & <Link to='/'><Links>Privacy Policy</Links></Link>
            </Terms>
        </Container>
    );
};

export default MobileSignUp;
