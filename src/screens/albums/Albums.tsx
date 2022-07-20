import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from "../../components/shared/header/Header";
import {State} from "../../store";
import {getAlbums, getAllPhotos, getPhotos, getSelfie} from "../../store/actions/user";
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
    AlbumsWrapper,
    ButtonWrapper
} from "./AlbumsStyles";
import {Container} from "../../components/shared/container/Container";
import {useNavigate} from 'react-router-dom';
import Footer from "../../components/shared/footer/Footer";
import Button from "../../components/shared/button/Button";
import Photo from '../../components/shared/photo/Photo';

const Albums = () => {
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const albums = useSelector((state: State) => state.userReducer.albums)
    const allPhotos = useSelector((state: State) => state.userReducer.allPhotos)
    const dispatch = useDispatch<AppDispatch>()
    const nav = useNavigate()



    useEffect(() => {
        if (!albums) dispatch(getAlbums())
    }, [])
    useEffect(() => {
        if (!allPhotos) dispatch(getAllPhotos())
    }, [])

    return (
        <div style={{overflowX: 'scroll'}}>
            {/*{isOpen === true && <LandscapeImage setIsOpen={setIsOpen} image={image}/>}*/}
            <div>
                <LoaderGif isLoading={isLoading}/>
                <AlbumsWrapper>
                    <AlbumsHeading>Albums</AlbumsHeading>
                    <AlbumsList>
                        {
                            albums && albums?.map((album) =>
                                <AlbumWrapper onClick={() => nav(`/album/${album.id}`)} key={album.id}>
                                    <AlbumPhoto src={album.cover_photo.image.thumbnail_image} alt=""/>
                                    <AlbumNameWrapper>
                                        <AlbumName>Brooklyn Bridge</AlbumName>
                                    </AlbumNameWrapper>
                                </AlbumWrapper>)
                        }
                    </AlbumsList>
                    <PhotosHeading>All photos</PhotosHeading>
                </AlbumsWrapper>
                <Photos>
                    {allPhotos && allPhotos?.map((photo) => <Photo
                            key={photo.id}
                            imageId={photo.id}
                            thumbnail={photo.image.thumbnail_image}
                            image={photo.image.image_with_watermark}
                        />
                    )}
                </Photos>
                <Container>
                    <ButtonWrapper>
                        <Button>Unlock your photos</Button>
                    </ButtonWrapper>
                </Container>
                <Footer/>
            </div>


        </div>
    );
};

export default Albums;


