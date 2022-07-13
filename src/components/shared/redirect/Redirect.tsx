import React, {useEffect} from 'react';
import TokensLocalStorage from "../../../utils/local-storage/TokensLocalStorage";
import {getUser} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {State} from "../../../store";

const Redirect = () => {
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();
    const user = useSelector((state: State) => state.userReducer.user)
    if (TokensLocalStorage.getInstance().getAccessToken() && !user) {
        dispatch(getUser())
    }
    useEffect(() => {
        user ? nav('/dashboard') : nav('/login')
    }, [user])
    return (
        <></>
    );
};
export default Redirect;
