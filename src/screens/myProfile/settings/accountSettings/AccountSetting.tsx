import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../../../components/shared/container/Container";
import LoaderGif from "../../../../components/shared/loaderGif/LoaderGif";
import { Tab } from "../../../../components/shared/tab/Tab";
import { State } from "../../../../store";

const AccountSetting = () => {
  const user = useSelector((state: State) => state.userReducer.user);
  const isLoading = useSelector((state: State) => state.userReducer.isLoading);

  const nav = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Heading>Account settings</Heading>
        <Tab onClick={() => nav("/change-number")}>
          <TabLeft>
            <div>
              <img
                width="25px"
                height="30px"
                src="/assets/icons/phone.svg"
                alt=""
              />
            </div>
            <Data>
              <DataTop>
                <Text>Phone •</Text>
                <Verified> Verified</Verified>
              </DataTop>
              <Value>
                {user ? user.phone_number : "no phone number in use"}
              </Value>
            </Data>
          </TabLeft>
          <Arrow src="/assets/icons/arrow-right.svg" alt="" />
        </Tab>
        <Tab onClick={() => nav("/change-email")}>
          <TabLeft>
            <div>
              <img
                width="25px"
                height="20px"
                src="/assets/icons/letter.svg"
                alt=""
              />
            </div>
            <Data>
              <DataTop>
                <Text>Email</Text>
              </DataTop>
              <Value>
                {user && user.email ? user.email : "no email in use"}
              </Value>
            </Data>
          </TabLeft>
          <Arrow src="/assets/icons/arrow-right.svg" alt="" />
        </Tab>
      </Wrapper>
      <LoaderGif isLoading={isLoading} />
    </Container>
  );
};
const Wrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
`;
const Heading = styled.div`
  text-align: center;
  font-family: "Termina";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  margin: 20px 0 20px;
  @media (min-width: 1440px) {
    margin: 41px 0 32px;
    font-size: 22px;
    line-height: 26px;
  }
`;
const TabLeft = styled.div`
  display: flex;
  align-items: center;
`;
const Data = styled.div`
  margin: 0 0 0 10px;
`;
const DataTop = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
const Text = styled.span`
  color: #262626;
`;
const Verified = styled.span`
  color: #015b08;
`;

const Value = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 21px;
  }
`;
const Arrow = styled.img`
  width: 8px;
  height: 16px;
  background-size: cover;
  @media (min-width: 1440px) {
    width: 10px;
    height: 20px;
  }
`;

export default AccountSetting;
