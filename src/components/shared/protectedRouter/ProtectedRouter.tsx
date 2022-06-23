import {Navigate, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import TokensLocalStorage from "../../../utils/local-storage/TokensLocalStorage";
import {setAuth} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";

const Protected = ({children}: any) => {
    const isLoggedIn = useSelector((state: any) => state.userReducer.isAuth)

    if (!isLoggedIn && !TokensLocalStorage.getInstance().getAccessToken()) {
        TokensLocalStorage.getInstance().clear()
        return <Navigate to="/" replace/>;
    }

    return children;
};
export default Protected;
