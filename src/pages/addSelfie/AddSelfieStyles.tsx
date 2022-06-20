import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 181px;
  height: 181px;
  background: url("/assets/images/avatar-icon.png");
  background-size: contain;
  position: relative;
`;
export const Circle = styled.div`
  width: 42px;
  height: 42px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #3300CC;
  border: 1px solid #3300CC;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const VerticalLine = styled.div`
  height: 18px;
  width: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HorizontalLine = styled.div`
  height: 2px;
  width: 18px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Add = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
  margin: 72px 0 14px;
`;
export const Description = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  margin: 0 0 30px;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 0.5px solid #AEAEAE;
  height: 40px;
  padding: 10px 9px 10px 14px;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;
export const CropWrapper = styled.div`
  background: #262626;
  width: 100%;
  min-height: 100%;
  height: 100%;
  padding: 0 15px;
  top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CropInner = styled.div`
  position: relative;
  width: 100%;
  height: 285px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Buttons = styled.div`
  bottom: 0;
  margin: 95px 0 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
`;
export const Retake = styled.button`
  border: 1px solid #FFFFFF;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  background: #262626;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  text-align: center;
  outline: none;

`;
export const Save = styled.button`
  background: #FFFFFF;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  text-align: center;
  outline: none;
  border: none;
`;
export const HeaderCrop = styled.div`
  text-align: center;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
  position: relative;
  margin: 23px 0 94px;
  width: 100%;
`;
export const Action = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 0 42px;
  color: #FFFFFF;
`;

export const Cross = styled.img`
  position: absolute;
  left: -8px;
  top: -3px;
`;



