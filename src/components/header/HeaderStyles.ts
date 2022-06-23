import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 0 0;
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
export const GetStarted = styled.p`
  font-family: 'Termina';
  margin: 136px 0 0;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
`;

export const EnterPhone = styled.p`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  margin: 14px 0 0;
`;
export const Filling = styled.div`
  display: flex;
  margin: 19px 0 0;
`;

export const FlagWrapper = styled.div`
  width: 70px;
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
export const PhoneWrapper = styled.input`
  width: 265px;
  height: 40px;
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  padding: 15px 13px 14px;
  outline: none;

  &::placeholder {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #262626;
  }
`;

export const Agreement = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #6D6D6D;
  margin: 20px 0 0;
`;

export const Terms = styled(Agreement)`
  margin: 38px 0 0;
  text-decoration: none;
`;
export const Links = styled.span`
  display: inline;
  color: #6D6D6D;
  border-bottom: 0.75px solid #3300CC;
  text-decoration: none;
  text-underline: none;
  outline: none;

`;
export const Flag = styled.img`
  margin: 0 8px 0 0;
  width: 24px;
  height: 24px;
`;
export const ArrowLeft = styled.div`
  background: url("/assets/icons/arrow-back.svg");
  background-size: cover;
  height: 16px;
  width: 8px;
  position: absolute;
  left: 15px;
  top: 19px;
`;
export const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;




