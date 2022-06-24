import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../../components/shared/container/Container';
import {Tab} from '../../../../components/shared/tab/Tab';

const AccountSetting = () => {
    return (
        <Container>
            <Wrapper>
                <Heading>
                    Account settings
                </Heading>
                <Tab>
                    <TabLeft>
                        <div>
                            <img width='25px' height='30px' src="/assets/icons/phone.svg" alt=""/>
                        </div>
                        <Data>
                            <DataTop>
                                <Text>Phone •</Text><Verified> Verified</Verified>
                            </DataTop>
                            <Value>
                                +1 123-456-7890
                            </Value>
                        </Data>
                    </TabLeft>
                    <img width='8px' height='16px' src="/assets/icons/arrow-right.svg" alt=""/>
                </Tab>
                <Tab>
                    <TabLeft>
                        <div>
                            <img width='25px' height='30px' src="/assets/icons/letter.svg" alt=""/>
                        </div>
                        <Data>
                            <DataTop>
                                <Text>Email</Text>
                            </DataTop>
                            <Value>
                                the.real.jane.smith@gmail.com
                            </Value>
                        </Data>
                    </TabLeft>
                    <img width='8px' height='16px' src="/assets/icons/arrow-right.svg" alt=""/>
                </Tab>
            </Wrapper>
        </Container>
    );
};
const Wrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;
const Heading = styled.div`
  text-align: center;
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  margin: 20px 0 20px;
`;
const TabLeft = styled.div`
  display: flex;
  align-items: center;
`;
const Data = styled.div`
  margin: 0 0 0 10px;
`;
const DataTop = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;`;
const Text = styled.span`
  color: #262626;
`;
const Verified = styled.span`
  color: #015B08;
`;

const Value = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
`;

export default AccountSetting;
