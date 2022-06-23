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
`;
export const YourSelfie = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #262626;
  margin: 20px 0 0;
`;
export const AvatarWrapper = styled.div`
  position: relative;
  margin: 13px 0 20px;
  width: 118px;
  height: 101px;
`;
export const Avatar = styled.img`
  outline: none;
  border: none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const Edit = styled.div`
  background: url("/assets/icons/edit.svg");
  outline: none;
  width: 35px;
  height: 35px;
  position: absolute;
  right: 0;
  bottom: 0;
  //border: 1px solid #fff;
  background-size: contain;
  //border-radius: 50%;
`;
export const Tab = styled.div`
  background: #FFFFFF;
  border: 1px solid #CECCB5;
  border-radius: 10px;
  width: 345px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 0;
  padding: 10px 15px;
  &:first-child{
    margin: 0;
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
  max-width: 375px;
  margin: 0 auto;
`;
export const ArrowRight = styled.div`
  background: url("/assets/icons/arrow-right.svg");
  background-size: cover;
  height: 16px;
  width: 8px;
`;
