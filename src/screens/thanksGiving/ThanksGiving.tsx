import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/shared/button/Button";
import { Container } from "../../components/shared/container/Container";
import Header from "../../components/shared/header/Header";

const ThanksGiving = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <Header />
      <Container>
        <Heading>Thank you</Heading>
        <Album>The album Brooklyn Bridge is now unlocked.</Album>
        <Text>
          You can now download, share, post, and print your hi-res,
          watermark-free, glorious memories.
        </Text>
        <Img src="" alt="asd" />
        <Button>See photos</Button>
        <BottomText>
          You will receive an email with your order details.
        </BottomText>
      </Container>
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
