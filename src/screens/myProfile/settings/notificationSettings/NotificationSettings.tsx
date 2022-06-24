import React, {useEffect, useState } from 'react';
import Button from '../../../../components/shared/button/Button';
import {Container} from "../../../../components/shared/container/Container";
import {BotText, Heading, Inner, Setting, Settings, SettingWrapper } from './NotificationSettingsStyles';
import Checkbox from "../../../../components/shared/checkbox/Checkbox";
import { useDispatch, useSelector } from 'react-redux';
import {updateNotifications} from "../../../../store/actions/user";
import {AppDispatch} from "../../../../App";
import {State} from "../../../../store";

const NotificationSettings = () => {
    const user = useSelector((state: State) => state.userReducer.user)

    const dispatch = useDispatch<AppDispatch>()

    const [textNotification, setTextNotification] = useState(false)
    const [email, setEmail] = useState(false)
    const [unsubscribe, setUnsubscribe] = useState(false)

    const handleUpdateNotification = () => {
        dispatch(updateNotifications(textNotification, email, unsubscribe))
    }
    useEffect(() => {
        if(user){
            setEmail(user.notification_settings.email)
            setTextNotification(user.notification_settings.text_message)
            setUnsubscribe(user.notification_settings.unsubscribe)
        }
    }, [])
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
                <Button margin='39px 0 0' onClick={handleUpdateNotification}>Save</Button>
            </Inner>
        </Container>
    );
};

export default NotificationSettings;
