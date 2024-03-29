import styled, { keyframes } from "styled-components";
const breatheAnimation = keyframes`
 0% {  opacity: 0;  }
 10% { opacity: 0.1;}
 20% {opacity: 0.2; }
  30% { opacity: 0.3;}
  40% {opacity: 0.4; }
  50% {opacity: 0.5; }
  60% {opacity: 0.6; }
  70% { opacity: 0.7;}
  80% {opacity: 0.8; }
  90% { opacity: 0.9;}
 100% { opacity: 1  }
`;
export const Wrapper = styled.div`
  background: #262626;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: auto;
  animation-name: ${breatheAnimation};
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1440px) {
    background: #000000;
  }
`;

export const CrossWrapper = styled.div`
  height: 45px;
  @media (min-width: 1440px) {
    height: 60px;
  }
`;
export const Cross = styled.img`
  display: block;
  text-align: left;
  margin: 15px 0 0 7px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  @media (min-width: 1440px) {
    margin: 30px 0 0 40px;
    position: absolute;
  }
`;
export const Img = styled.img`
  object-fit: contain;
  max-height: 500px;

  @media (min-width: 1440px) {
    max-height: 100vh;
    height: 100%;
    max-width: 1243px;
    object-fit: contain;
    margin: 0 auto;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Button = styled.button`
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  background: #ffffff;
  border-radius: 50px;
  height: 50px;
  outline: none;
  border: none;
  margin: 30px auto 30px;
  max-width: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 1440px) {
    position: fixed;
    height: 50px;
    width: 200px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 30px 15px 30px;
`;
export const LeftWrapper = styled.div`
  display: flex;
  width: 119px;
  justify-content: space-between;
`;

export const FooterButton = styled.button`
  height: 50px;
  width: 196px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  outline: none;
  background: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;
  @media (min-width: 1440px) {
    position: fixed;
    right: 40px;
    bottom: 30px;
    width: 200px;
    height: 50px;
    font-style: normal;
    font-size: 22px;
    line-height: 28px;
  }
`;

export const Download = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  //line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  @media (min-width: 1440px) {
    position: fixed;
    right: 269px;
    bottom: 36px;
  }
`;
export const Share = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  //line-height: 18px;
  color: #ffffff;
  cursor: pointer;
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const Word = styled.div`
  margin: 5px 0 0;
`;
