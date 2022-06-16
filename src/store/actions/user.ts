import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setPhoneResponseCode
    | typeof userActions.setPhone
    | typeof userActions.setLoading
    | typeof userActions.setAuth>

export const sendPhone =
    (phone: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                dispatch(userActions.setLoading(true))
                const response = await mainApi.sendPhone({
                    "phone_number": phone,
                });
                dispatch(userActions.setPhone(phone));
                dispatch(userActions.setPhoneResponseCode(response.status.toString()));
                dispatch(userActions.setLoading(false))

            } catch (e) {
                console.log(e);
                dispatch(userActions.setLoading(false))
            }
        };
export const setPhoneResponseCode =
    (code: string | null): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                dispatch(userActions.setPhoneResponseCode(code));
            } catch (e) {
                console.log(e);
            }
        };
export const setLoading =
    (isLoading: boolean): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                dispatch(userActions.setLoading(isLoading));
            } catch (e) {
                console.log(e);
            }
        };
export const resendPhone =
    (phone: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const response = await mainApi.sendPhone({
                    "phone_number": phone,
                });
                dispatch(userActions.setPhone(phone));
            } catch (e) {
                console.log(e);
            }
        };

export const sendOtp =
    (phone: string, otp: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                dispatch(userActions.setLoading(true))

                const response = await mainApi.otpValidate({"phone_number": phone, "otp": otp});
                const accessToken: string = response.data.access_token;
                const storage = TokensLocalStorage.getInstance();
                console.log(response)
                storage.setAccessToken(accessToken);
                dispatch(userActions.setAuth(true))
                dispatch(userActions.setLoading(false))

                console.log(response)
            } catch (e) {
                console.log(e);
                dispatch(userActions.setLoading(false))
                alert('incorrect code')
            }
        };


export const setAuth =
    (isAuth: boolean): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                dispatch(userActions.setAuth(isAuth))
            } catch (e) {
                console.log(e);
            }
        };

