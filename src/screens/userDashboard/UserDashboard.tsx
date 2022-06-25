import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../../components/shared/header/Header";
import {getSelfie} from "../../store/actions/user";
import {AppDispatch} from "../../App";
import {State} from "../../store";
import {BotText, Browse, Line, LoaderWrapper, MessageIcon, Slider, SliderInner, SliderItem, TopText} from './UserDashboardStyles';
import {Inner, Wrapper} from '../addSelfie/AddSelfieStyles';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {Container} from '../../components/shared/container/Container';

const UserDashboard = () => {
    const dispatch = useDispatch<AppDispatch>()

    const selfie = useSelector((state: State) => state.userReducer.selfie)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    useEffect(() => {
        if (!selfie) {
            dispatch(getSelfie())
        }
    })

    return (
        <Wrapper>
            <Header imageSrc={selfie ? selfie : '/assets/images/avatar-icon.png'}/>
            <Container>
                <Inner>
                    <MessageIcon src="/assets/icons/message.svg" width='82px' height='75px' alt=""/>
                    <TopText>Your photos will drop soon.</TopText>
                    <BotText>You will get a text message when they are ready. It can take up to 48 hours.</BotText>
                </Inner>
            </Container>
            <Line/>
            <Browse>Browse Art Prints </Browse>
            {/*    <div style={{display: 'flex',   overflowX: 'scroll'}}>*/}
            {/*    <span>*/}
            {/*        <img width={"1400px"} src="/assets/images/slide1.png" alt=""/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <img src="/assets/images/slide2.png" alt=""/>*/}
            {/*    </span>*/}
            {/*    <span>*/}
            {/*        <img src="/assets/images/slide1.png" alt=""/>*/}
            {/*    </span>*/}
            {/*</div>*/}
            <Slider>
                <SliderInner>
                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide1.png" alt=""/>
                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide2.png" alt=""/>
                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide1.png" alt=""/>
                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide2.png" alt=""/>
                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide1.png" alt=""/>
                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide2.png" alt=""/>
                </SliderInner>

            </Slider>
            {
                isLoading ? <LoaderWrapper>
                    <img src='/assets/icons/gif-loader.gif'/>
                </LoaderWrapper> : null
            }
        </Wrapper>

    );
};

export default UserDashboard;
