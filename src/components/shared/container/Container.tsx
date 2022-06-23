import styled from "styled-components";

export  const Container = styled.div<{maxWidth?: string}>`
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 552px;
  ${({maxWidth}) => maxWidth ? `max-width: ${maxWidth}` : null}
`;
