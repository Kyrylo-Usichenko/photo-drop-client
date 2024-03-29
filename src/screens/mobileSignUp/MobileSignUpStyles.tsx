import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;

`;
export const Filling = styled.div`
  display: flex;
  margin: 19px 0 0;
  /* flex-direction: column; */
`;

export const Agreement = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #6D6D6D;
  margin: 20px 0 0;
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
export const EnterPhone = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  margin: 14px 0 0;
  @media (min-width: 1440px) {
    margin: 29px 0 0;
  }
`;

export const Flag = styled.img`
  margin: 0 8px 0 0;
  width: 24px;
  height: 24px;
`;
export const FlagWrapper = styled.div`
  min-width: 70px;
  height: 40px;
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  margin: 0 10px 0 0;
  display: flex;
  align-items: center;
  padding: 0 10px 0 8px;
  cursor: pointer;
`;
export const GetStarted = styled.p`
  font-family: 'Termina';
  margin: 136px 0 0;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
  @media (min-width: 1440px) {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin: 178px 0 0;
  }
`;
export const Links = styled.span`
  display: inline;
  color: #6D6D6D;
  border-bottom: 0.75px solid #3300CC;
  text-decoration: none;
  text-underline: none;
  outline: none;

`;

export const PhoneWrapper = styled.input`
  width: 100%;
  height: 40px;
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  padding: 15px 13px 14px;
  outline: none;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #262626;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #262626;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 23px;
  }
`;


export const Terms = styled(Agreement)`
  margin: 38px 0 0;
  text-decoration: none;
`;
