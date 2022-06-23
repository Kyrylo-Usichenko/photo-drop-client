import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
interface Props {
    isActive?: boolean
    setActive: (value: boolean) => void
}

const Checkbox = ({isActive = false, setActive }: Props)=> {
    console.log(isActive)
    return (
        <Input isActive={isActive} onClick={() => setActive(!isActive)}>
            {isActive ? <Tick/> : null}
        </Input>
    );
};
const Input = styled.div<{isActive: boolean}>`
  border: 1px solid ${({isActive}) => isActive ? '#3300CC' : '#E3E0D8'};
  outline: none;
  border-radius: 5px;
  width: 20px;
  height: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Tick = styled.span`
  width: 14px;
  height: 10px;
  background-size: contain;
  background: url("/assets/icons/tick.svg");
`;
export default Checkbox;
