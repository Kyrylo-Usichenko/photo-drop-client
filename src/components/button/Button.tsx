import React from 'react';
import styled from "styled-components";
type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: React.ReactNode; // make the component able to receive children elements
    color?: "primary" | "secondary"; // two styling options
    disabled?: boolean; // make the button disabled or not
    margin?: string
};

const Button = ({ onClick, children, disabled, margin}: ButtonProps) => {
    return (
        <Wrapper margin={margin} onClick={onClick} disabled={disabled}>
            {children}
        </Wrapper>
    );
};
export const Wrapper = styled.button<ButtonProps>`
  width: 345px;
  height: 50px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  background: #3300CC;
  border-radius: 50px;
  outline: none;
  border: none;
  margin: ${ (props) => props.margin && `${props.margin}` };
  &:disabled{
    opacity: 0.33;
  }
`;
export default Button;
