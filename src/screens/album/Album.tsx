import React, {useEffect} from 'react';
import {
    Back,
    ButtonWrapper,
    Count,
    Data,
    FooterBot,
    Header,
    Inner,
    Name,
    Photo,
    Photos,
    Unlock,
    Wrapper
} from './AlbumStyles';
import {getAlbumPhotos, getPhotos, setAlbumPhotos} from "../../store/actions/user";
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
            dispatch(getAlbumPhotos(albumId as string))
    }, [])

    const onBackClick = () => {
        dispatch(setAlbumPhotos(null))
        nav(-1)
    }
    return (
        <Wrapper>
            <div>
                <Header>
                    <Back onClick={onBackClick} src="/assets/icons/arrow-back.svg" alt=""/>
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
                            <Photo loading='lazy' key={photo.id} src={photo.image.thumbnail_image} alt=""/>
                        )
                    }
                </Photos>
                <Container>
                    <ButtonWrapper>
                        <Button>Unlock your photos</Button>
                    </ButtonWrapper>
                </Container>
            </div>
            <Footer/>
            <LoaderGif isLoading={isLoading}/>
        </Wrapper>
    );
};

export default Album;


