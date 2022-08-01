import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../../App";
import Button from "../../components/shared/button/Button";
import { Container } from "../../components/shared/container/Container";
import Footer from "../../components/shared/footer/Footer";
import Photo from "../../components/shared/photo/Photo";
import { State } from "../../store";
import { getAlbumPhotos, setAlbumPhotos } from "../../store/actions/user";
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
  const albumPhotos = useSelector(
    (state: State) => state.userReducer.albumPhotos
  );
  const albumLocation = useSelector(
    (state: State) => state.userReducer.albumLocation
  );
  let date = useSelector((state: State) => {
    const timeStamp = state.userReducer.albumDate;
    const date1 = new Date(timeStamp as number);
    const date = {
      month: date1.toLocaleString("default", { month: "short" }),
      day: date1.getDate(),
      year: date1.getFullYear(),
    };
    return date;
  });

  const nav = useNavigate();

  useEffect(() => {
    dispatch(getAlbumPhotos(albumId as string));
  }, []);

  const onBackClick = () => {
    dispatch(setAlbumPhotos(null));
    nav("/dashboard");
  };
  return (
    <Wrapper>
      {albumPhotos ? (
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
                  <Name>{albumLocation}</Name>
                  <FooterBot>
                    {`${date.month} ${date.day}, ${date.year} •`}
                    <Count>{albumPhotos ? albumPhotos.length : 0} photos</Count>
                  </FooterBot>
                </Data>
                <Unlock>Unlock your photos</Unlock>
              </Inner>
            </Header>
            <Photos>
              {albumPhotos &&
                albumPhotos.map((photo) => (
                  <Photo
                    key={photo.id}
                    imageId={photo.id}
                    image={photo.image.image_with_watermark}
                    thumbnail={photo.image.thumbnail_image}
                  />
                ))}
            </Photos>
            <Container>
              <ButtonWrapper>
                <Button>Unlock your photos</Button>
              </ButtonWrapper>
            </Container>
          </div>
          <Footer />
        </div>
      ) : null}
    </Wrapper>
  );
};

export default Album;
