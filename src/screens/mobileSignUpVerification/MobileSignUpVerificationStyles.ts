import styled from "styled-components";

export const Heading = styled.p`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  margin: 106px 0 0;
  color: #262626;
  @media (min-width: 1440px) {
    margin: 223px 0 0;
  }

`;
export const Wrapper = styled.section`
  margin: 0 auto;
`;
export const NumberWrapper = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #262626;
  margin: 14px 0 0;
  @media (min-width: 1440px) {
    margin: 29px 0 0;
    font-size: 18px;
    line-height: 23px;
  }

`;
export const Number = styled.span`
  font-family: 'Futura PT';
  font-style: normal;
  font-size: 16px;
  line-height: 21px;
  color: #262626;
  font-weight: 600;
  margin: 0 0 0 5px;
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 23px;
  }
`;
export const CodeWrapper = styled.div`
  margin: 19px 0 0;
  display: flex;
  justify-content: space-between;
`;
export const Field = styled.input`
  width: 45px;
  height: 40px;
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  -webkit-appearance: none;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 23px;
  }
`;

export const Resend = styled.p`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #3300CC;
  margin: 20px 0 0;
  cursor: pointer;
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 23px;
  }
`;

