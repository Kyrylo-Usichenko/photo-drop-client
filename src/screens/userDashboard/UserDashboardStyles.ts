import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MessageIcon = styled.img`
  margin: 20px 0 0;
  padding: 0 0 0 13px;
`;
export const TopText = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #262626;
  margin: 21px 0 0;
`;
export const BotText = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #262626;
  margin: 16px 0 0;
`;
export const Line = styled.div`
  width: 100%;
  height: 5px;
  margin: 41px 0 0;
  background: #F4F4F4;
`;
export const Browse = styled.div`
  padding: 0 15px;
  margin: 41px 0 0;
  width: 100%;
`;
export const Slider = styled.div`
  height: 216px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  margin: 21px 0 0;
  position: relative;
`;
export const SliderInner = styled.div`
  width: 1063px;
  text-align: left;
  padding: 0 0 0 15px;
 
`;
export const SliderItem = styled.img`
    margin: 0 5px 0 0;
`;


