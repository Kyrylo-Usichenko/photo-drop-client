import React, {useEffect} from 'react';
import Header from "../../components/shared/header/Header";
import {getSelfie} from "../../store/actions/user";
import {State} from "../../store";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from "../../App";
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const PrivacyPolicy = () => {
    const selfie = useSelector((state: State) => state.userReducer.selfie)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const dispatch = useDispatch<AppDispatch>()
    const nav = useNavigate()
    useEffect(() => {
        if (!selfie) {
            dispatch(getSelfie())
        }
    })
    return (
        <div>
            <Header imageSrc={selfie}/>
            <Heading>Privacy Policy</Heading>
        </div>
    );
};

const Heading = styled.h1`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  text-align: center;
  margin: 20px 0 0;
  padding: 0;
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 22px;
    margin: 41px 0 0;
  }
`

export default PrivacyPolicy;
