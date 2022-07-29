import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/shared/button/Button';
import {Container} from '../../components/shared/container/Container';
import {State} from "../../store";
import {AppDispatch} from "../../App";
import {setUserName, updateEmail} from '../../store/actions/user';
import {Navigate, useNavigate} from 'react-router-dom';
import Header from "../../components/shared/header/Header";

const SecondOnboarding = () => {
    const user = useSelector((state: State) => state.userReducer.user)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const nav = useNavigate()

    const onNextClick = async (email: string | null | undefined) => {
        setLoading(true)
        await dispatch(setUserName(name))
        setLoading(false)
        if (email) nav('/dashboard')

    }
    console.log('onboarding');
    
    const onSeeClick = async () => {
        setLoading(true)
        await dispatch(updateEmail(email))
        setLoading(false)
        nav('/dashboard')
    }
    return (
        <section style={{height: '100%'}}>
            {
                user ? (
                    user.full_name ? (
                        user.email ? (<Navigate to='/dashboard'/>) : (
                            <Wrapper>
                                <div>
                                    <Header/>
                                    <Container>
                                        <HeadingEmail>
                                            Hey there, {user.full_name}! 👋
                                        </HeadingEmail>
                                        <Input type="email"
                                               placeholder='the.real.jane.smith@gmail.com'
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <Button onClick={onSeeClick} isLoading={loading} disabled={!email.length}>See
                                            your
                                            photos!
                                        </Button>
                                    </Container>
                                </div>


                                <Container>
                                    <Footer>
                                        By continuing, you indicate that you have read and agree to our <Underlined>Terms
                                        of
                                        Use</Underlined> & <Underlined>Privacy Policy</Underlined>
                                    </Footer>
                                </Container>
                            </Wrapper>
                        )

                    ) : (
                        <div>
                            <Header/>
                            <Container>
                                <Heading>
                                    Let’s get to know you
                                </Heading>
                                <Input value={name} onChange={(e) => setName(e.target.value)} type="text"
                                       placeholder='What’s your name?'/>
                                {user.email ?
                                    <Button isLoading={loading}
                                            disabled={!name.length}
                                            onClick={() => onNextClick(user.email!)}>
                                        See your photos!
                                    </Button>
                                    :
                                    <Button isLoading={loading} onClick={() => onNextClick(user.email!)}
                                            disabled={!name.length}>Next</Button>
                                }
                            </Container>
                        </div>)
                ) : null
            }
        </section>
    );
};
const Heading = styled.h1`
  margin: 165px auto 0;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
    margin: 253px auto 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const Footer = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #6D6D6D;
  margin: 0 0 38px;
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 21px;
  }

`;
const Underlined = styled.span`
  border-bottom: 0.75px solid #3300CC;
  cursor: pointer;
`;


const HeadingEmail = styled.h1`
  margin: 139px auto 0;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
  max-width: 420px;
  word-break: break-all;
  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
    margin: 235px auto 0;
  }
`;

const Input = styled.input`
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  padding: 0 13px 0;
  height: 40px;
  margin: 21px 0 21px;
  width: 100%;
  max-width: 420px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #262626;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #6D6D6D;
  }

  @media (min-width: 1440px) {
    margin: 30px 0 20px;
    font-size: 18px;
    line-height: 23px;
    &::placeholder {
      font-size: 18px;
      line-height: 23px;
    }
  }
  outline: none;
`;

export default SecondOnboarding;
