import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import TokensLocalStorage from "../../../utils/local-storage/TokensLocalStorage";
import { useEffect } from "react";
import {getUser} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";


const Protected = ({children}: any) => {
    const isLoggedIn = useSelector((state: any) => state.userReducer.isAuth)
    const user = useSelector((state: any) => state.userReducer.user)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if(!user) dispatch(getUser())
    })
    if (!isLoggedIn && !TokensLocalStorage.getInstance().getAccessToken()) {
        TokensLocalStorage.getInstance().clear()
        return <Navigate to="/" replace/>;
    }
    return children;
};
export default Protected;
