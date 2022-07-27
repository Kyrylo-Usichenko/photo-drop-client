import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;

`;
export const Inner = styled.div`
  border-top: 1px solid #F1F0EC;
  border-bottom: 1px solid #F1F0EC;
  padding: 19px 0 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ArrowWrapper = styled.div`
  height: 100%;
  width: 38px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    left: 25px;
  }
`;
export const ArrowLeft = styled.div`
  background: url("/assets/icons/arrow-back.svg") center no-repeat ;
  background-size: contain;
  height: 16px;
  width: 8px;
`;
export const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
  object-fit: cover;
  @media (min-width: 1440px) {
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
  }
`;
export const Logo = styled.img`
  width: 125px;
  height: 16px;
  @media (min-width: 1440px) {  
    width: 179px;
    height: 22px;
  }
`;




