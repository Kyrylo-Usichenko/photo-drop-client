import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import {setAuth} from "../../store/actions/user";
import {AppDispatch} from "../../App";
const Protected = ( {children}: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();

    const isLoggedIn = useSelector((state: any) => state.userReducer.isAuth)
    // const messageError = useSelector((state: any) => state.userReducer.errorMessage)

    if (!isLoggedIn && !TokensLocalStorage.getInstance().getAccessToken()) {
        TokensLocalStorage.getInstance().clear()
        return <Navigate to="/" replace />;
    }
    // if (messageError === 'Forbidden') {
    //     TokensLocalStorage.getInstance().clear()
    // }
    return children;
};
export default Protected;
