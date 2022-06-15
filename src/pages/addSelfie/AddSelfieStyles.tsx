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

export const Menu = styled.ul<{ isOpen: boolean }>`
  display: ${({isOpen}) => isOpen ? 'flex' : 'none'};
  width: 226px;
  height: 119px;
  background: #F5F4F2;
  border-radius: 11px;
  position: absolute;
  bottom: -99px;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  -webkit-animation: spin 0.3s linear 1;
  animation: spin 0.3s linear 1;
  @-webkit-keyframes spin {
    0% {
      -webkit-opacity: 0;
    }
    100% {
      -webkit-opacity: 1;
    }
  }

  @keyframes spin {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
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
export const Icon = styled.img`
  background-size: contain;
`;

export const ItemText = styled.div`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.015em;
  color: #000000;
  
`;

