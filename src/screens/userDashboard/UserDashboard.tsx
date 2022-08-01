/* eslint-disable no-restricted-globals */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { AppDispatch } from "../../App";
import { Container } from "../../components/shared/container/Container";
import Footer from "../../components/shared/footer/Footer";
import Header from "../../components/shared/header/Header";
import LoaderGif from "../../components/shared/loaderGif/LoaderGif";
import { State } from "../../store";
import { getAlbums, getAllPhotos } from "../../store/actions/user";
import { Inner } from "../addSelfie/AddSelfieStyles";
import Albums from "../albums/Albums";
import {
  BotText,
  Browse,
  Line,
  MessageIcon,
  Slider,
  SliderInner,
  SliderItem,
  TopText,
} from "./UserDashboardStyles";

const UserDashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: State) => state.userReducer.user);
  const tempSelfie = useSelector(
    (state: State) => state.userReducer.tempSelfie
  );
  const nav = useNavigate();
  const isLoading = useSelector((state: State) => state.userReducer.isLoading);
  const albums = useSelector((state: State) => state.userReducer.albums);
  const allPhotos = useSelector((state: State) => state.userReducer.allPhotos);
  useEffect(() => {
    //@ts-ignore
    history.pushState(null, null, location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };
  });

  useEffect(() => {
    if (!albums) dispatch(getAlbums());
    if (!allPhotos) dispatch(getAllPhotos());
  }, []);
  return (
    <Sda>
      <Header
        imageSrc={
          user?.selfie?.photo_url
            ? user.selfie.photo_url
            : tempSelfie
            ? tempSelfie
            : "/assets/images/avatar-icon.png"
        }
      />
      {albums ? (
        albums.length === 0 ? (
          <div>
            <Container>
              <Inner>
                <MessageIcon
                  src="/assets/icons/message.svg"
                  width="82px"
                  height="75px"
                  alt=""
                />
                <TopText>Your photos will drop soon.</TopText>
                <BotText>
                  You will get a text message when they are ready. It can take
                  up to 48 hours.
                </BotText>
              </Inner>
            </Container>
            <Line />
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <Browse>Browse Art Prints </Browse>
              <Slider>
                <SliderInner>
                  <SliderItem
                    height={"216px"}
                    width={"168px"}
                    src="/assets/images/slide1.png"
                    alt=""
                  />
                  <SliderItem
                    height={"216px"}
                    width={"168px"}
                    src="/assets/images/slide2.png"
                    alt=""
                  />
                  <SliderItem
                    height={"216px"}
                    width={"168px"}
                    src="/assets/images/slide3.png"
                    alt=""
                  />
                </SliderInner>
              </Slider>
            </div>
            <Footer />
          </div>
        ) : (
          <div>
            <Albums />
          </div>
        )
      ) : (
        <div>
          <LoaderGif isLoading={isLoading} />
        </div>
      )}
      {/* <DisableBackButton /> */}
    </Sda>
  );
};
const Sda = styled.div`
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar: none; /* Firefox */
`;
export default UserDashboard;
