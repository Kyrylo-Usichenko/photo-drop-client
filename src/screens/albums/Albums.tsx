import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../../components/shared/header/Header";
import {State} from "../../store";
import {getAlbums, getPhotos, getSelfie} from "../../store/actions/user";
import {AppDispatch} from "../../App";
import LoaderGif from '../../components/shared/loaderGif/LoaderGif';
import {
    AlbumPhoto,
    AlbumsList,
    AlbumsHeading,
    AlbumName,
    AlbumWrapper,
    AlbumNameWrapper,
    PhotosHeading,
    Photos,
    Photo,
    AlbumsWrapper,
    ButtonWrapper
} from "./AlbumsStyles";
import {Container} from "../../components/shared/container/Container";
import {useNavigate} from 'react-router-dom';
import Footer from "../../components/shared/footer/Footer";
import Button from "../../components/shared/button/Button";

const Albums = () => {
    const selfie = useSelector((state: State) => state.userReducer.selfie)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const albums = useSelector((state: State) => state.userReducer.albums)
    const albumsPhotos = useSelector((state: State) => state.userReducer.albumsPhotos)
    const dispatch = useDispatch<AppDispatch>()
    const nav = useNavigate()

    useEffect(() => {
        if (!selfie) {
            dispatch(getSelfie())
        }
    })
    useEffect(() => {
        if(!albums) dispatch(getAlbums())
    }, [])
    useEffect(() => {
        // albums && albums.forEach((album) => dispatch(getPhotos(album.id)))
        albums && dispatch(getPhotos(albums[0].id))
    }, [dispatch, albums])


    return (
        <div style={{overflowX: 'scroll'}}>
            <Header imageSrc={selfie}/>
            <LoaderGif isLoading={isLoading}/>
            <AlbumsWrapper>
                <AlbumsHeading>Albums</AlbumsHeading>
                <AlbumsList>
                    {
                        albums && albums.map((album) =>
                            <AlbumWrapper onClick={() => nav(`/album/${album.id}`)} key={album.id}>
                                <AlbumPhoto src={album.cover_photo.image.sign_url} alt=""/>
                                <AlbumNameWrapper>
                                    <AlbumName>Brooklyn Bridge</AlbumName>
                                </AlbumNameWrapper>
                            </AlbumWrapper>)
                    }
                </AlbumsList>
                <PhotosHeading>All photos</PhotosHeading>
            </AlbumsWrapper>
            <Photos>
                {albumsPhotos && albumsPhotos.map((photo) => <Photo loading='lazy'
                                                                    src={photo.image.image_with_watermark}/>
                )}
                {/*<Photo src="/assets/images/photo-example.png"/>*/}
            </Photos>
            <Container>
                <ButtonWrapper>
                    <Button>Unlock your photos</Button>
                </ButtonWrapper>
            </Container>
            <Footer/>
        </div>
    );
};

export default Albums;


