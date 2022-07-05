import React, {useEffect} from 'react';
import {Back, ButtonWrapper, Count, Data, FooterBot, Header, Inner, Name, Photo, Photos, Unlock} from './AlbumStyles';
import {getAlbumPhotos, getPhotos} from "../../store/actions/user";
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from "../../App";
import {State} from "../../store";
import Button from "../../components/shared/button/Button";
import Footer from '../../components/shared/footer/Footer';
import {Container} from '../../components/shared/container/Container';
import LoaderGif from "../../components/shared/loaderGif/LoaderGif";

const Album = () => {
    const dispatch = useDispatch<AppDispatch>()
    const params = useParams();
    const albumId = params.id;
    const albumPhotos = useSelector((state: State) => state.userReducer.albumPhotos)
    const nav = useNavigate()
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)


    useEffect(() => {
        if (!albumPhotos) {
            dispatch(getAlbumPhotos(albumId as string))
        }
    })
    return (
        <div>
            <Header>
                <Back onClick={() => nav(-1)} src="/assets/icons/arrow-back.svg" alt=""/>
                <Inner>
                    <Data>
                        <Name>Brooklyn Bridge</Name>
                        <FooterBot>Jan 10, 2022
                            •<Count>{albumPhotos ? albumPhotos.length : 0} photos</Count></FooterBot>
                    </Data>
                    <Unlock>
                        Unlock your photos
                    </Unlock>
                </Inner>
            </Header>
            <Photos>
                {
                    albumPhotos && albumPhotos.map((photo) =>
                        <Photo key={photo.id} src={photo.image.image_with_watermark} alt=""/>
                    )
                }
            </Photos>
            <Container>
                <ButtonWrapper>
                    <Button>Unlock your photos</Button>
                </ButtonWrapper>
            </Container>
            <Footer/>
            <LoaderGif isLoading={isLoading}/>
        </div>
    );
};

export default Album;


