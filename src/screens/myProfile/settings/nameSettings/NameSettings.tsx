import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/shared/button/Button';
import {Container} from '../../../../components/shared/container/Container';

const NameSettings = () => {
    return (
        <Container>
            <Inner>
                <Heading>Your name</Heading>
                <Input type="text" placeholder='Your Name'/>
                <Button margin='21px 0 0'>Save</Button>
            </Inner>
        </Container>
    );
};
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #262626;
  margin: 167px 0 0;
`;
const Input = styled.input`
  outline: none;
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  width: 345px;
  height: 40px;
  margin: 20px 0 0;
  padding: 15px 13px 14px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #262626;
`;
export default NameSettings;
