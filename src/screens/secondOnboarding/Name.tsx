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

const NameComp = () => {
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
        if (email === 'ads') nav('/dashboard')

    }
    const onSeeClick = async () => {
        setLoading(true)
        await dispatch(updateEmail(email))
        setLoading(false)
        nav('/dashboard')
    }
    return (
        <Wrapper>

            {/*{*/}
            {/*    user ? (*/}
            {/*        user.full_name ? (*/}
            {/*            user.email ? (<Navigate to='/dashboard'/>) : (*/}
            {/*                <div>*/}
            {/*                    <HeadingEmail>*/}
            {/*                        Hey there, Jane Smith! 👋*/}
            {/*                    </HeadingEmail>*/}
            {/*                    <Input type="email"*/}
            {/*                           placeholder='the.real.jane.smith@gmail.com'*/}
            {/*                           value={email}*/}
            {/*                           onChange={(e) => setEmail(e.target.value)}*/}
            {/*                    />*/}

            {/*                    <Button onClick={onSeeClick} isLoading={loading} disabled={!email.length}>See your*/}
            {/*                        photos!*/}
            {/*                    </Button>*/}
            {/*                    <div>*/}
            {/*                        By continuing, you indicate that you have read and agree to our Terms of Use &*/}
            {/*                        Privacy Policy*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            )*/}

            {/*        ) : (*/}
            {/*            <div>*/}
            {/*                <Heading>*/}
            {/*                    Let’s get to know you*/}
            {/*                </Heading>*/}
            {/*                <Input value={name} onChange={(e) => setName(e.target.value)} type="text"*/}
            {/*                       placeholder='What’s your name?'/>*/}
            {/*                {user.email ?*/}
            {/*                    <Button isLoading={loading}*/}
            {/*                            disabled={!name.length}*/}
            {/*                            onClick={() => onNextClick(user.email!)}>*/}
            {/*                        See your photos!*/}
            {/*                    </Button>*/}
            {/*                    :*/}
            {/*                    <Button isLoading={loading} onClick={() => onNextClick(user.email!)}*/}
            {/*                            disabled={!name.length}>Next</Button>*/}
            {/*                }*/}
            {/*            </div>)*/}
            {/*    ) : null*/}
            {/*}*/}
            {/*<Container>*/}


                    <Container>
                        <Header/>
                        <HeadingEmail>
                            Hey there, Jane Smith! 👋
                        </HeadingEmail>
                        <Input type="email"
                               placeholder='the.real.jane.smith@gmail.com'
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />

                        <Button onClick={onSeeClick} isLoading={loading} disabled={!email.length}>See your
                            photos!
                        </Button>
                    </Container>
                    <Container>
                        By continuing, you indicate that you have read and agree to our Terms of Use &
                        Privacy Policy
                    </Container>

            {/*</Container>*/}
        </Wrapper>
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

// @ts-ignore
export default NameComp;
