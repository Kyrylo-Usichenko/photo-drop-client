import React, {useEffect} from 'react';
import {Container} from '../../components/container/Container';
import {
    Avatar,
    AvatarWrapper,
    Edit,
    Heading,
    TabTopText,
    Tab,
    YourSelfie,
    TabBotText,
    LeftWrapper,
    Wrapper,
    ArrowRight
} from './UserAccountStyles';
import {State} from "../../store";
import {getSelfie, getUser} from "../../store/actions/user";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from "../../App";
import BackIcon from "../../components/common/icons/BackIcon";
import {ArrowLeft} from '../../components/header/HeaderStyles';
import {LoaderWrapper} from "../userDashboard/UserDashboardStyles";

const UserAccount = () => {
    const dispatch = useDispatch<AppDispatch>()
    const selfie = useSelector((state: State) => state.userReducer.selfie)
    const tempSelfie = useSelector((state: State) => state.userReducer.tempSelfie)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    useEffect(() => {
        if (!selfie){
            dispatch(getSelfie())
        }}, [selfie])
    return (
        <Container>{

        }
            <Wrapper>
                <Heading >Welcome</Heading>
                <YourSelfie>Your selfie</YourSelfie>
                <AvatarWrapper>
                    {
                        selfie && <Avatar src={selfie} alt=""/>
                    }

                    <Edit/>
                </AvatarWrapper>
                <Tab>
                    <LeftWrapper>
                        <TabTopText>
                            Your name
                        </TabTopText>
                        <TabBotText>
                            Tell us your name to personalize communications.
                        </TabBotText>
                    </LeftWrapper>
                    <ArrowRight/>
                </Tab>
                <Tab>
                    <LeftWrapper>
                        <TabTopText>
                            Account settings
                        </TabTopText>
                        <TabBotText>
                            Update your phone and email
                        </TabBotText>
                    </LeftWrapper>
                    <ArrowRight/>

                </Tab>
                <Tab>
                    <LeftWrapper>
                        <TabTopText>
                            Notification settings
                        </TabTopText>
                        <TabBotText>
                            How should we contact you?
                        </TabBotText>
                    </LeftWrapper>
                    <ArrowRight/>
                </Tab>
                {
                    isLoading ? <LoaderWrapper>
                        <img src='/assets/icons/gif-loader.gif'/>
                    </LoaderWrapper> : null
                }
            </Wrapper>

        </Container>
    );
};

export default UserAccount;
