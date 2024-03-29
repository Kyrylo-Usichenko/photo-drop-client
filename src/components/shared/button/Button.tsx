import React from "react";
import styled from "styled-components";
import Loader from "../loader/Loader";

type Props = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  disabled?: boolean; // make the button disabled or not
  margin?: string;
  isLoading?: boolean;
};

const Button = ({
  onClick,
  children,
  disabled,
  margin,
  isLoading = false,
}: Props) => {
  return (
    <Wrapper margin={margin} onClick={onClick} disabled={disabled}>
      {isLoading ? <Loader /> : children}
    </Wrapper>
  );
};
export const Wrapper = styled.button<Props>`
  width: 100%;
  max-width: 420px;
  height: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #ffffff;
  background: #3300cc;
  border-radius: 50px;
  outline: none;
  border: none;
  margin: ${(props) => props.margin && `${props.margin}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    opacity: 0.33;
  }
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 28px;
  }
`;
export default Button;
