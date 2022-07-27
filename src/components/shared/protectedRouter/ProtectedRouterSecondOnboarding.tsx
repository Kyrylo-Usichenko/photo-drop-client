import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppDispatch } from "../../../App";
import { getUser } from "../../../store/actions/user";
import TokensLocalStorage from "../../../utils/local-storage/TokensLocalStorage";

const Protected = ({ children }: any) => {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isAuth);
  const user = useSelector((state: any) => state.userReducer.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user) dispatch(getUser());
  });

  if (!isLoggedIn && !TokensLocalStorage.getInstance().getAccessToken()) {
    TokensLocalStorage.getInstance().clear();
    return <Navigate to="/login-onboarding" replace />;
  }
  return children;
};
export default Protected;
