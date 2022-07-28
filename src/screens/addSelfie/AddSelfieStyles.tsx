import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Inner = styled.div`
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
  margin: 30px 0 0;
  @media (min-width: 1440px) {
    margin: 28px 0 0;
  }
`;
export const Circle = styled.div`
  width: 42px;
  height: 42px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #3300cc;
  border: 1px solid #3300cc;
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
  font-family: "Termina";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
  margin: 72px 0 0;
  @media (min-width: 1440px) {
    margin: 178px 0 0;
    font-size: 30px;
    line-height: 36px;
  }
`;
export const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  margin: 14px 0 0;
  text-align: center;
  @media (min-width: 768px) {
    white-space: nowrap;
  }
  @media (min-width: 1440px) {
    margin: 29px 0 0;
    white-space: nowrap;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 0.5px solid #aeaeae;
  height: 40px;
  padding: 10px 9px 10px 14px;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

export const DarkWindow = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (min-width: 1440px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    z-index: 998;
    background: #000000;
    opacity: 0.5;
  }
`;
export const CropWrapper = styled.div<{ isOpen: boolean }>`
  background: #262626;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 999;
  @media (min-width: 1440px) {
    width: 379px;
    height: 653px;
    top: 97px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 20px;
  }
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
  margin: 0 0 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
`;
export const Retake = styled.button`
  border: 1px solid #ffffff;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  background: #262626;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  text-align: center;
  outline: none;
  cursor: pointer;
`;
export const Save = styled.button`
  background: #ffffff;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  text-align: center;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const HeaderCrop = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  position: relative;
  margin: 23px 0 94px;
  width: 100%;
`;
export const Action = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 0 42px;
  color: #ffffff;
`;

export const Cross = styled.img`
  position: absolute;
  left: -8px;
  top: -3px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
