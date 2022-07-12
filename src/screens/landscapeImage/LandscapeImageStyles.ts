import styled from "styled-components";

export const Wrapper = styled.div`
  background: #262626;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Cross = styled.img`
  display: block;
  text-align: left;
  margin: 15px 0 0 7px;
  height: 30px;
  width: 30px;
  @media (min-width: 1440px) {
    margin: 30px 0 0 40px;
    position: absolute;
  }
`;
export const Img = styled.img`
  //margin: 0 auto;
  //text-align: center;
  //max-height: 390px;
  //object-fit: contain;
  @media (min-width: 1440px) {
    height: 100%;
    max-width: 1243px;
    object-fit: cover;
  }
`;
export const Button = styled.button`
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  background: #FFFFFF;
  border-radius: 50px;
  height: 50px;
  outline: none;
  border: none;
  margin: 30px auto 30px;
  max-width: 345px;
  @media (min-width: 1440px) {
    position: fixed;
    height: 50px;
    width: 200px;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
