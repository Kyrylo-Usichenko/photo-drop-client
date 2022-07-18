import styled from "styled-components";

export  const Container = styled.div<{maxWidth?: string}>`
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 450px;
  //height: 100%;
  ${({maxWidth}) => maxWidth ? `max-width: ${maxWidth}` : null}
`;
