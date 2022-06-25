import React, {useEffect, useState} from 'react';
import Button from '../../../../components/shared/button/Button';
import {Container} from "../../../../components/shared/container/Container";
import {BotText, Heading, Inner, Setting, Settings, SettingWrapper} from './NotificationSettingsStyles';
import Checkbox from "../../../../components/shared/checkbox/Checkbox";
import {useDispatch, useSelector} from 'react-redux';
import {getUser, redirectUser, updateNotifications} from "../../../../store/actions/user";
import {AppDispatch} from "../../../../App";
import {State} from "../../../../store";
import { useNavigate } from 'react-router-dom';
import Loader from "../../../../components/shared/loader/Loader";

const NotificationSettings = () => {
    const user = useSelector((state: State) => state.userReducer.user)

    const dispatch = useDispatch<AppDispatch>()
    const nav = useNavigate();
    const [textNotification, setTextNotification] = useState(false)
    const [email, setEmail] = useState(false)
    const [unsubscribe, setUnsubscribe] = useState(false)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const redirectToUrl = useSelector((state: State) => state.userReducer.redirectToUrl)
    const handleUpdateNotification = () => {
        dispatch(updateNotifications(textNotification, email, unsubscribe))
    }
    useEffect(() => {
        if (!user) dispatch(getUser())
    })

    useEffect(() => {
        dispatch(redirectUser(null))
        if(redirectToUrl) nav(redirectToUrl)
    }, [redirectToUrl])
    useEffect(() => {
        if (user && user.notification_settings) {
            setEmail(user.notification_settings.email)
            setTextNotification(user.notification_settings.text_message)
            setUnsubscribe(user.notification_settings.unsubscribe)
        }
    }, [user])
    return (
        <Container>
            <Inner>
                <Heading>Notification settings</Heading>
                <Settings>
                    <SettingWrapper>
                        <Checkbox isActive={textNotification} setActive={setTextNotification}/>
                        <Setting>Text messages</Setting>
                    </SettingWrapper>
                    <SettingWrapper>
                        <Checkbox isActive={email} setActive={setEmail}/>
                        <Setting>Email</Setting>
                    </SettingWrapper>
                    <SettingWrapper>
                        <Checkbox isActive={unsubscribe} setActive={setUnsubscribe}/>
                        <Setting>Unsubscribe</Setting>
                    </SettingWrapper>
                </Settings>
                <BotText>Stop marketing notifications. You will still receive transactional notifications for purchases
                    and when
                    new photos are available.
                </BotText>
                <Button margin='39px 0 0' onClick={handleUpdateNotification}>{isLoading ? <Loader/> : "Save"}</Button>
            </Inner>
        </Container>
    );
};

export default NotificationSettings;
