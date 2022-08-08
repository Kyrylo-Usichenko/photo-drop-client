import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AppDispatch } from "../../App";
import Button from "../../components/shared/button/Button";
import { Container } from "../../components/shared/container/Container";
import Header from "../../components/shared/header/Header";
import { State } from "../../store";
import { getAlbum } from "../../store/actions/user";

const ThanksGiving = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  useEffect(() => {
    dispatch(getAlbum(params.id as string));
  }, []);

  const album = useSelector((state: State) => state.userReducer.album);
  console.log(album);

  return (
    <div>
      {album ? (
        <div>
          <Header />
          <Container>
            <Heading>Thank you</Heading>
            <Album>The album {album?.location} is now unlocked.</Album>
            <Text>
              You can now download, share, post, and print your hi-res,
              watermark-free, glorious memories.
            </Text>
            {/*@ts-ignore */}
            <Img src={album && album.photos[0].image.full} />
            <Button onClick={() => nav(`/album/${params.id}`)}>
              See photos
            </Button>
            <BottomText>
              You will receive an email with your order details.
            </BottomText>
          </Container>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
const Heading = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin: 20px 0 0;
  color: #262626;
  text-align: center;
  @media (min-width: 1440px) {
    margin: 41px 0 0;
    font-size: 30px;
    line-height: 36px;
  }
`;
const Album = styled.div`
  margin: 20px 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 28px;
  }
`;
const Text = styled.div`
  margin: 19px 0 0;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #262626;

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 28px;
  }
`;
const Img = styled.img`
  margin: 30px 0 30px;
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  height: 200px;
  background: #979797 ;
  @media (min-width: 1440px) {
    margin: 39px 0 40px;
    height: 250px;
    width: 100%;
  }
`;
const BottomText = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #262626;
  }
`;

export default ThanksGiving;
