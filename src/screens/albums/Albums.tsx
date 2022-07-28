import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../App";
import Button from "../../components/shared/button/Button";
import { Container } from "../../components/shared/container/Container";
import Footer from "../../components/shared/footer/Footer";
import LoaderGif from "../../components/shared/loaderGif/LoaderGif";
import Photo from "../../components/shared/photo/Photo";
import { State } from "../../store";
import { getAlbums, getAllPhotos } from "../../store/actions/user";
import {
  AlbumName,
  AlbumNameWrapper,
  AlbumPhoto,
  AlbumsHeading,
  AlbumsList,
  AlbumsWrapper,
  AlbumWrapper,
  ButtonWrapper,
  Photos,
  PhotosHeading,
} from "./AlbumsStyles";

const Albums = () => {
  const isLoading = useSelector((state: State) => state.userReducer.isLoading);
  const albums = useSelector((state: State) => state.userReducer.albums);
  const allPhotos = useSelector((state: State) => state.userReducer.allPhotos);
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();

  useEffect(() => {
    if (!albums) dispatch(getAlbums());
  }, []);
  useEffect(() => {
    if (!allPhotos) dispatch(getAllPhotos());
  }, []);


  return (
    <div style={{ overflowX: "scroll" }}>
      <div>
        <LoaderGif isLoading={isLoading} />
        <AlbumsWrapper>
          <AlbumsHeading>Albums</AlbumsHeading>
          <AlbumsList>
            {albums &&
              albums?.map((album) => (
                <AlbumWrapper
                  onClick={() => nav(`/album/${album.id}`)}
                  key={album.id}
                >
                  <AlbumPhoto src={album.cover_photo.album_cover} alt="" />
                  <AlbumNameWrapper>
                    <AlbumName>{album.location}</AlbumName>
                  </AlbumNameWrapper>
                </AlbumWrapper>
              ))}
          </AlbumsList>
          <PhotosHeading>All photos</PhotosHeading>
        </AlbumsWrapper>
        <Photos>
          {allPhotos &&
            allPhotos?.map((photo) => (
              <Photo
                key={photo.id}
                imageId={photo.id}
                thumbnail={photo.image.thumbnail_image}
                image={photo.image.image_with_watermark}
              />
            ))}
        </Photos>
        <Container>
          <ButtonWrapper>
            <Button>Unlock your photos</Button>
          </ButtonWrapper>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default Albums;
