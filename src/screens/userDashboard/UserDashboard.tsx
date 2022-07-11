import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../../components/shared/header/Header";
import {getAlbums, getAllPhotos, getSelfie} from "../../store/actions/user";
import {AppDispatch} from "../../App";
import {State} from "../../store";
import {
    BotText,
    Browse,
    Line,
    MessageIcon,
    Slider,
    SliderInner,
    SliderItem,
    TopText
} from './UserDashboardStyles';
import {Inner} from '../addSelfie/AddSelfieStyles';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {Container} from '../../components/shared/container/Container';
import LoaderGif from "../../components/shared/loaderGif/LoaderGif";
import Footer from '../../components/shared/footer/Footer';
import Albums from "../albums/Albums";

const UserDashboard = () => {
    const dispatch = useDispatch<AppDispatch>()

    const selfie = useSelector((state: State) => state.userReducer.selfie)
    const tempSelfie = useSelector((state: State) => state.userReducer.tempSelfie)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const albums = useSelector((state: State) => state.userReducer.albums)
    const allPhotos = useSelector((state: State) => state.userReducer.allPhotos)

    useEffect(() => {
        if (!selfie && !tempSelfie) {
            dispatch(getSelfie())
        }
    })

    useEffect(() => {
        if (!albums) dispatch(getAlbums())
    }, [])
    useEffect(() => {
        if (!allPhotos) dispatch(getAllPhotos())
    }, [])

    return (
        <div>
            <Header imageSrc={selfie ? selfie : tempSelfie ? tempSelfie : '/assets/images/avatar-icon.png'}/>
            {
                (albums && albums.length > 0) ? (
                    <Albums/>
                ) : (
                    <div>
                        <Container>
                            <Inner>
                                <MessageIcon src="/assets/icons/message.svg" width='82px' height='75px' alt=""/>
                                <TopText>Your photos will drop soon.</TopText>
                                <BotText>You will get a text message when they are ready. It can take up to 48
                                    hours.</BotText>
                            </Inner>
                        </Container>
                        <Line/>
                        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                            <Browse>Browse Art Prints </Browse>
                            <Slider>
                                <SliderInner>
                                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide1.png"
                                                alt=""/>
                                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide2.png"
                                                alt=""/>
                                    <SliderItem height={'216px'} width={"168px"} src="/assets/images/slide3.png"
                                                alt=""/>
                                </SliderInner>

                            </Slider>
                        </div>
                        <Footer/>
                        <LoaderGif isLoading={isLoading}/>
                    </div>
                )
            }
        </div>
    );
};

export default UserDashboard;
