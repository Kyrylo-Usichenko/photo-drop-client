import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../../components/shared/header/Header";
import {State} from "../../store";
import {getSelfie} from "../../store/actions/user";
import {AppDispatch} from "../../App";
import LoaderGif from '../../components/shared/loaderGif/LoaderGif';
import {AlbumPhoto, AlbumsList, AlbumsHeading, AlbumName, AlbumWrapper, AlbumNameWrapper, PhotosHeading, Photos, Photo, ButtonBot} from "./AlbumsStyles";
import {Container} from "../../components/shared/container/Container";
import { useNavigate } from 'react-router-dom';

const Albums = () => {
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
        <div style={{  overflowX: 'scroll'}}>
            <Header imageSrc={selfie}/>
            <LoaderGif isLoading={isLoading}/>
            <Container>
                <AlbumsHeading>Albums</AlbumsHeading>
                <AlbumsList>
                    <AlbumWrapper>
                        <AlbumPhoto src="/assets/images/album-photo.png" alt=""/>
                        <AlbumNameWrapper>
                            <AlbumName>Brooklyn Bridge</AlbumName>
                        </AlbumNameWrapper>
                    </AlbumWrapper>
                    <AlbumWrapper>
                        <AlbumPhoto src="/assets/images/album-photo.png" alt=""/>
                        <AlbumNameWrapper>
                            <AlbumName>Brooklyn Bridge</AlbumName>
                        </AlbumNameWrapper>
                    </AlbumWrapper>
                    <AlbumWrapper>
                        <AlbumPhoto src="/assets/images/album-photo.png" alt=""/>
                        <AlbumNameWrapper>
                            <AlbumName>Brooklyn Bridge</AlbumName>
                        </AlbumNameWrapper>
                    </AlbumWrapper>
                    <AlbumWrapper>
                        <AlbumPhoto src="/assets/images/album-photo.png" alt=""/>
                        <AlbumNameWrapper>
                            <AlbumName>Brooklyn Bridge</AlbumName>
                        </AlbumNameWrapper>
                    </AlbumWrapper>
                    <AlbumWrapper>
                        <AlbumPhoto src="/assets/images/album-photo.png" alt=""/>
                        <AlbumNameWrapper>
                            <AlbumName>Brooklyn Bridge</AlbumName>
                        </AlbumNameWrapper>
                    </AlbumWrapper>
                </AlbumsList>
                <PhotosHeading>All photos</PhotosHeading>
            </Container>
            <Photos>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
                <Photo src="/assets/images/photo-example.png"/>
            </Photos>
            <ButtonBot >Unlock your photos</ButtonBot>
        </div>
    );
};

export default Albums;


