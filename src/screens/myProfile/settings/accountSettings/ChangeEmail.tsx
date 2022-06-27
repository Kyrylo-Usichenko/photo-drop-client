import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {AppDispatch} from "../../../../App";
import {State} from "../../../../store";
import {getUser, redirectUser, setResponseCode, updateEmail} from "../../../../store/actions/user";
import {Container} from '../../../../components/shared/container/Container';
import Button from '../../../../components/shared/button/Button';
import styled from 'styled-components';

const ChangeEmail = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const nav = useNavigate();
    const user = useSelector((state: State) => state.userReducer.user)
    const redirectToUrl = useSelector((state: State) => state.userReducer.redirectToUrl)
    const [email, setEmail] = useState('')


    const status = useSelector((state: State) => state.userReducer.responseCode)
    useEffect(() => {
        if (status === 'OK') {
            dispatch(setResponseCode(null))
            navigate('/sms-verification-update')
        }
    })
    useEffect(()=>{
        if(!user){
            dispatch(getUser())
        }
    })
    useEffect(()=>{
        if(user && user.email){
            setEmail(user.email)
        }
    }, [user])
    useEffect(()=>{
        dispatch(redirectUser(null))
        if(redirectToUrl) nav(redirectToUrl)
    }, [redirectToUrl])

    return (
        <div>
            <Container>
                <Wrapper>
                    <Heading>Your email</Heading>
                    <Input placeholder={'Email'} value={email} onChange={e => setEmail(e.target.value)} type="text"/>
                    <Button isLoading={isLoading} onClick={() => dispatch(updateEmail(email))} margin='21px 0 0'>
                        Save
                    </Button>
                </Wrapper>
            </Container>
        </div>

    );
};

const Heading = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #262626;
  margin: 166px 0 0;
`
const Input = styled.input`
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  height: 40px;
  width: 345px;
  margin: 19px 0 0;
  outline: none;
  padding: 15px 13px 14px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #262626;

`

export const Wrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ChangeEmail;
