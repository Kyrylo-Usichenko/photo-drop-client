import styled from "styled-components";

export const Heading = styled.h1`
  font-family: "Termina";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  text-align: center;
  margin: 20px 0 14px;
  padding: 0;
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 22px;
    margin: 41px 0 15px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Inner = styled.div`
  margin: 0 auto;
  padding: 0 15px 50px;
  max-width: 700px;
  & div {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #262626;
    margin: 0 0 5px;
  }
  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #262626;
    margin: 0 0 30px;

    & ol {
      list-style: auto;
      padding-left: 25px;
      margin: 5px 0 0;
    }
    & ul {
      list-style: disc;
      padding-left: 25px;
    }
  }

  @media (min-width: 1440px) {
    & div {
      font-size: 20px;
      line-height: 24px;
      margin: 0 0 5px;
    }
    & p {
      font-size: 18px;
      line-height: 23px;
      letter-spacing: -0.02em;
    }
  }
`;
