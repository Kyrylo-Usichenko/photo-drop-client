import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../../components/header/Header";
import {getSelfie} from "../../store/actions/user";
import {AppDispatch} from "../../App";
import {State} from "../../store";
import {BotText, Browse, Line, LoaderWrapper, MessageIcon, TopText} from './UserDashboardStyles';
import {Wrapper} from '../addSelfie/AddSelfieStyles';

import Slider from './Slider';
import "swiper/css/bundle";

const UserDashboard = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selfie = useSelector((state: State) => state.userReducer.selfie)
    const tempSelfie = useSelector((state: State) => state.userReducer.tempSelfie)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    useEffect(() => {
        dispatch(getSelfie())
    }, [selfie])
    return (
        <Wrapper>
            <Header imageSrc={selfie ? selfie : tempSelfie}/>
            <MessageIcon src="/assets/icons/message.svg" width='82px' height='75px' alt=""/>
            <TopText>Your photos will drop soon.</TopText>
            <BotText>You will get a text message when they are ready. It can take up to 48 hours.</BotText>
            <Line/>
            <Browse>Browse Art Prints </Browse>
            {/*<Slider/>*/}
            {
                isLoading ? <LoaderWrapper>
                    <img src='/assets/icons/gif-loader.gif'/>
                </LoaderWrapper> : null
            }
        </Wrapper>
    );
};

export default UserDashboard;
