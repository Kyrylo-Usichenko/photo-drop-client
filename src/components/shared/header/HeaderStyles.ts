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




