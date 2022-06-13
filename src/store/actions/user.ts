import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setPhoneResponseCode
    | typeof userActions.setPhone>

export const sendPhone =
    (phone: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const response = await mainApi.sendPhone({
                    "phone_number": phone,
                });
                dispatch(userActions.setPhone(phone));
                dispatch(userActions.setPhoneResponseCode(response.status.toString()));

            } catch (e) {
                console.log(e);
            }
        };

export const sendOtp =
    (phone: string, otp: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const response = await mainApi.otpValidate({ "phone_number": phone, "otp": otp });
                const accessToken: string = response.data.access_token;
                const storage = TokensLocalStorage.getInstance();
                storage.setAccessToken(accessToken);
                console.log(response)
            } catch (e) {
                console.log(e);
            }
        };


