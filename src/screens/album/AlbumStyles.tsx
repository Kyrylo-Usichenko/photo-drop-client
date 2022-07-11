import styled from "styled-components";

export const Header = styled.div`
  height: 55px;
  border-bottom: 1px solid #F1F0EC;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;
  @media (min-width: 1440px) {
    height: 61px;
  }
`;
export const Wrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  height: 100%;
`;

export const Data = styled.div`
  margin: 0 0 0 15px;
  height: 100%;
  padding: 11px 0 0;
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;
export const Back = styled.img`
  width: 8px;
  height: 16px;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 10px;
    height: 20px;
    position: absolute;
    left: 40px;
  }
`;

export const Name = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  //line-height: 22px;
  color: #262626;
  height: 13px;
  @media (min-width: 1440px) {
    height: unset;
    font-size: 22px;
    line-height: 26px;
  }
`;
export const FooterBot = styled.div`
  margin: 10px 0 0;
  height: 10px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #262626;
  @media (min-width: 1440px) {
    height: unset;
    margin: 0 0 0 38px;
    font-size: 16px;
    line-height: 21px;
  }

`;
export const Inner = styled.div`
  height: 100%;
  @media (min-width: 1440px) {
    max-width: 1200px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
  }

`;

export const Unlock = styled.div`
  display: none;
  @media (min-width: 1440px) {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #3300CC;
    display: block;
  }
`;

export const Count = styled.span`
  color: #3300CC;
  margin: 0 0 0 5px;
`;
export const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  flex: 1 1 30%;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  height: 100%;
  @media (min-width: 1440px) {
    max-width: 1200px;
    margin: 0 auto 100px;
  }
`;
export const Photo = styled.img`
  height: 33.33vw;
  object-fit: cover;
  max-width: 33.33%;
  flex: 0 1 33.33333%; /*grow | shrink | basis */
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  margin: 40px auto 40px;
  @media (min-width: 1440px) {
    width: 100%;
    max-width: 300px;
    margin: 100px auto 100px;
  }
`;
