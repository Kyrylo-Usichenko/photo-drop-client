import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Button from '../../../../components/shared/button/Button';
import {Container} from '../../../../components/shared/container/Container';
import {AppDispatch} from "../../../../App";
import {getUser, redirectUser, setLoading, setUserName} from "../../../../store/actions/user";
import {State} from "../../../../store";
import {useNavigate} from 'react-router-dom';
import {LoaderWrapper} from "../../../userDashboard/UserDashboardStyles";
import Loader from "../../../../components/shared/loader/Loader";

const NameSettings = () => {
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector((state: State) => state.userReducer.user)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const redirectToUrl = useSelector((state: State) => state.userReducer.redirectToUrl)
    const [name, setName] = useState(user && user.full_name ? user.full_name : '');
    const nav = useNavigate();
    useEffect(() => {
        if(!user) dispatch(getUser())
    })
    useEffect(() => {
        dispatch(redirectUser(null))

        if(redirectToUrl) nav(redirectToUrl)
    }, [redirectToUrl])

    useEffect(() => {
        if(user){
            if(user.full_name){
                setName(user.full_name)
            }
        }
    }, [user])
    return (
        <Container>
            <Inner>
                <Heading>Your name</Heading>
                <Input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Your Name'/>
                <Button isLoading={isLoading} onClick={() => {
                    dispatch(setUserName(name as string))
                }} margin='21px 0 0'>{isLoading ? <Loader/> : "Save"}</Button>
            </Inner>
        </Container>
    );
};
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #262626;
  margin: 167px 0 0;
`;
const Input = styled.input`
  outline: none;
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  width: 345px;
  height: 40px;
  margin: 20px 0 0;
  padding: 15px 13px 14px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #262626;
`;
export default NameSettings;
