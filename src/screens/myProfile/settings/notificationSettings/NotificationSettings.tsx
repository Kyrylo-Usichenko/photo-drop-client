import React, { useState } from 'react';
import Button from '../../../../components/shared/button/Button';
import {Container} from "../../../../components/shared/container/Container";
import {BotText, Heading, Inner, Setting, Settings, SettingWrapper } from './NotificationSettingsStyles';
import Checkbox from "../../../../components/shared/checkbox/Checkbox";

const NotificationSettings = () => {
    const [textNotification, setTextNotification] = useState(false)
    const [email, setEmail] = useState(false)
    const [unsubscribe, setUnsubscribe] = useState(false)
    return (
        <Container>
            <Inner>
                <Heading>Notification settings</Heading>
                <Settings>
                    <SettingWrapper>
                        <Checkbox isActive={textNotification} setActive={setTextNotification} />
                        <Setting>Text messages</Setting>
                    </SettingWrapper>
                    <SettingWrapper>
                        <Checkbox isActive={email} setActive={setEmail} />
                        <Setting>Email</Setting>
                    </SettingWrapper>
                    <SettingWrapper>
                        <Checkbox isActive={unsubscribe} setActive={setUnsubscribe} />
                        <Setting>Unsubscribe</Setting>
                    </SettingWrapper>
                </Settings>
                <BotText>Stop marketing notifications. You will still receive transactional notifications for purchases and when
                    new photos are available.
                </BotText>
                <Button margin='39px 0 0'>Save</Button>
            </Inner>
        </Container>
    );
};

export default NotificationSettings;
