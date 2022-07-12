import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MessageIcon = styled.img`
  margin: 20px 0 0;
  padding: 0 0 0 13px;
  width: 82px;
  height: 75px;
  @media (min-width: 1440px) {
    width: 94px;
    height: 88px;
    margin: 53px 0 0;
  }
`;
export const TopText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #262626;
  margin: 21px 0 0;
  @media (min-width: 1440px) {
    margin: 30px 0 0;
    font-size: 30px;
    line-height: 38px;
  }
`;
export const BotText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #262626;
  margin: 16px 0 0;
  @media (min-width: 1440px) {
    margin: 19px 0 0;
    font-size: 22px;
    line-height: 28px;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 5px;
  margin: 41px 0 0;
  background: #F4F4F4;
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const Browse = styled.div`
  padding: 0 15px;
  margin: 41px 0 0;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #262626;
  @media (min-width: 1440px) {
    margin: 100px 0 0;
    font-size: 30px;
    line-height: 38px;
  }
`;

export const Slider = styled.div`
  height: 216px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 1440px;

  &::-webkit-scrollbar {
    display: none;
  }

  margin: 21px auto 60px;
  position: relative;
  @media (min-width: 1440px) {
    margin: 21px auto 100px;
  }
`;
export const SliderInner = styled.div`
  width: 545px;
  text-align: left;
  padding: 0 0 0 15px;
`;
export const SliderItem = styled.img`
  margin: 0 5px 0 0;
  border-radius: 20px;

`;

