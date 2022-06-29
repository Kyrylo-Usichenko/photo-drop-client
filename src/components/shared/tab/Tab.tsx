import styled from "styled-components";

export const Tab = styled.div`
  background: #FFFFFF;
  border: 1px solid #CECCB5;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0 0;
  padding: 10px 15px;
  cursor: pointer;
  &:first-child{
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin: 6px 0 0;
    height: 53px;
  }
`;
