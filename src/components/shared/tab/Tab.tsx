import styled from "styled-components";

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
  cursor: pointer;
  &:first-child{
    margin: 0;
  }
`;
