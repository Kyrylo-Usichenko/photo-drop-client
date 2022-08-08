import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../App";
import Button from "../../components/shared/button/Button";
import { Container } from "../../components/shared/container/Container";
import Footer from "../../components/shared/footer/Footer";
import Loader from "../../components/shared/loader/Loader";
import LoaderGif from "../../components/shared/loaderGif/LoaderGif";
import Photo from "../../components/shared/photo/Photo";
import { State } from "../../store";
import { getAlbum, setAlbum, unlockAlbum } from "../../store/actions/user";
import {
  Back,
  ButtonWrapper,
  Count,
  Data,
  FooterBot,
  Header,
  Inner,
  Name,
  Photos,
  Unlock,
  Wrapper,
} from "./AlbumStyles";

const Album = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const albumId = params.id;
  const nav = useNavigate();
  const album = useSelector((state: State) => state.userReducer.album);
  const timestamp = new Date(album?.date as number);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingTop, setLoadingTop] = useState(false);

  const date = {
    month: timestamp.toLocaleString("default", { month: "short" }),
    day: timestamp.getDate(),
    year: timestamp.getFullYear(),
  };

  useEffect(() => {
    dispatch(getAlbum(albumId as string));
  }, []);

  const onBackClick = () => {
    dispatch(setAlbum(null));
    nav("/dashboard");
  };

  const onUnlockClick = async (top: boolean) => {
    top ? setLoadingTop(true) : setLoading(true);

    await dispatch(unlockAlbum(albumId as string));
  };

  return (
    <Wrapper>
      {album?.photos ? (
        <div>
          <div>
            <Header>
              <Back
                onClick={onBackClick}
                src="/assets/icons/arrow-back.svg"
                alt=""
              />
              <Inner>
                <Data>
                  <Name>{album.location}</Name>
                  <FooterBot>
                    {`${date.month} ${date.day}, ${date.year} •`}
                    <Count>
                      {album.photos ? album.photos.length : 0} photos
                    </Count>
                  </FooterBot>
                </Data>
                {album.is_unlocked ? null : (
                  <Unlock onClick={() => onUnlockClick(true)}>
                    Unlock your photos
                  </Unlock>
                )}
                <LoaderGif isLoading={isLoadingTop} />
              </Inner>
            </Header>
            <Photos>
              {album.photos &&
                album.photos.map((photo) => (
                  <Photo
                    albumId={albumId as string}
                    key={photo.id}
                    imageId={photo.id}
                    image={photo.image.full}
                    thumbnail={photo.image.thumbnail}
                    isUnlocked={photo.is_unlocked}
                  />
                ))}
            </Photos>
            {album.is_unlocked ? null : (
              <Container>
                <ButtonWrapper>
                  <Button
                    isLoading={isLoading}
                    onClick={() => onUnlockClick(false)}
                  >
                    Unlock your photos
                  </Button>
                </ButtonWrapper>
              </Container>
            )}
          </div>
          <Footer />
        </div>
      ) : null}
    </Wrapper>
  );
};

export default Album;
