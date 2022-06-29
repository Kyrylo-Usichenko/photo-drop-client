import styled from "styled-components";

export const Heading = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  margin: 22px 0 0;
  text-align: center;
  @media (min-width: 1440px) {
    margin: 41px 0 0;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
`;
export const YourSelfie = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #262626;
  margin: 20px 0 0;
  @media (min-width: 1440px) {
    margin: 33px 0 0;
    font-size: 18px;
    line-height: 23px;
  }
`;
export const AvatarWrapper = styled.div`
  position: relative;
  margin: 13px 0 20px;
  width: 118px;
  height: 101px;
  @media (min-width: 1440px) {
    margin: 15px 0 20px;
    width: 172px;
    height: 150px;
  }
`;
export const Avatar = styled.img`
  outline: none;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 150px;
    height: 150px;
  }
`;
export const Edit = styled.div`
  background: url("/assets/icons/edit.svg");
  outline: none;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-size: contain;
  @media (min-width: 1440px) {
    width: 45px;
    height: 45px;
  }
`;
export const TabTopText = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #262626;
`;
export const TabBotText = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #262626;
`;
export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const ArrowRight = styled.div`
  background: url("/assets/icons/arrow-right.svg");
  background-size: cover;
  height: 16px;
  width: 8px;
`;
