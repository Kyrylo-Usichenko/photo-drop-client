import styled from "styled-components";

export const Inner = styled.div`
  width: 100% ;
  margin: 0 auto;
`;
export const Heading = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  margin-top: 20px;
  text-align: center;
  @media (min-width: 1440px) {
    margin: 41px 0 0;
    font-size: 22px;
    line-height: 26px;
  }
`;
export const Settings = styled.div`
  margin: 19px 0 0;
  @media (min-width: 1440px) {
    margin: 32px 0 0;
  }
`
export const Setting = styled.span`
  margin: 0 0 0 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #262626;
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 23px;
  }
  
`;
export const SettingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0;
`;

export const BotText = styled.p`
  padding: 0 0 0 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #6D6D6D;
  margin: 10px 0 0;
`;
