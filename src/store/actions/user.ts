import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions =
    | ReturnType<typeof userActions.setPhone>
    | ReturnType<typeof userActions.setLoading>
    | ReturnType<typeof userActions.setSelfie>
    | ReturnType<typeof userActions.setTempSelfie>
    | ReturnType<typeof userActions.setUser>
    | ReturnType<typeof userActions.setAuth>
    | ReturnType<typeof userActions.setUserName>
    | ReturnType<typeof userActions.setUserNotification>
    | ReturnType<typeof userActions.redirectUser>
    | ReturnType<typeof userActions.setEmail>
    | ReturnType<typeof userActions.setResponseCode>

export const sendPhone =
    (phone: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                dispatch(userActions.setLoading(true))
                await mainApi.sendPhone({
                    "phone_number": phone,
                });
                dispatch(userActions.setPhone(phone));
                dispatch(userActions.setLoading(false))
                dispatch(userActions.redirectUser('/sms-verification'))
            } catch (e) {
                console.log(e);
                dispatch(userActions.setLoading(false))
                alert('Send error')
            }
        };
export const setResponseCode =
    (code: string | null): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.setResponseCode(code));
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
                const response = await mainApi.resendPhone({
                    "phone_number": phone,
                });
                dispatch(userActions.setPhone(phone));
            } catch (e) {
                console.log(e);
            }
        };

export const resendUpdatePhone =
    (phone: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.resendUpdatePhone({
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
                storage.setAccessToken(accessToken);
                dispatch(userActions.setAuth(true))
                dispatch(userActions.setLoading(false))
            } catch (e) {
                console.log(e);
                dispatch(userActions.setLoading(false))
                alert('incorrect code')
            }
        };
export const sendUpdateOtp =
    (phone: string, otp: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(userActions.setLoading(true))
                const response = await mainProtectedApi.otpUpdateValidate({"phone_number": phone, "otp": otp});
                dispatch(userActions.setLoading(false))
            } catch (e) {
                console.log(e);
                dispatch(userActions.setLoading(false))
                alert('incorrect code')
            }
        };


export const sendPhoto =
    (photo: Blob, setSelfieUrl?: any, setCrop?: any, setZoom?: any): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(userActions.setLoading(true))
                const response = await mainProtectedApi.getPostPhotoUrl(photo.type.split('/').slice(1, 2).join('/'));
                const fields = response.data.fields
                const url = response.data.url
                dispatch(sendPhotoS3(fields, photo, url))
                const blobUrl = URL.createObjectURL(photo as any)
                dispatch(userActions.setTempSelfie(blobUrl))
                dispatch(userActions.setLoading(false))
                setSelfieUrl(null)
                setCrop({x: 0, y: 0})
                setZoom(1)
            } catch (e) {
                console.log(e);
                alert('saving failed')
                dispatch(userActions.setLoading(false))

            }
        };

export const setUserSelfie =
    (photo: Blob): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(userActions.setLoading(true))
                const response = await mainProtectedApi.getPostPhotoUrl(photo.type.split('/').slice(1, 2).join('/'));
                const fields = response.data.fields
                const url = response.data.url
                dispatch(sendPhotoS3(fields, photo, url))
                const blobUrl = URL.createObjectURL(photo as any)
                dispatch(userActions.setTempSelfie(blobUrl))
                dispatch(userActions.setLoading(false))
                dispatch(redirectUser('/dashboard'))
            } catch (e) {
                console.log(e);
                alert('saving failed')
                dispatch(userActions.setLoading(false))

            }
        };

export const redirectUser =
    (url: string | null): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.redirectUser(url))
            } catch (e) {
                console.log(e);
            }
        };


export const sendPhotoS3 =
    (fields: any, photo: any, url: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                await mainApi.setPhoto(fields, photo, url);
            } catch (e) {
                console.log(e);
            }
        };

export const setAuth = (isAuth: boolean): AsyncAction =>
    async (dispatch, _) => {
        dispatch(userActions.setAuth(isAuth))
    };
export const getSelfie =
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(setLoading(true))
                const func = async () => {
                    const response = await mainProtectedApi.getSelfie();
                    if (!response.data.photo_url) {
                        await func()
                    } else {
                        dispatch(userActions.setSelfie(response.data.photo_url))
                        dispatch(userActions.setTempSelfie(response.data.photo_url))
                        dispatch(setLoading(false))
                    }
                }
                await func();
            } catch (e) {
                console.log(e);
            }
        };

export const getUser =
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(setLoading(true))
                const response = await mainProtectedApi.getUser();
                dispatch(userActions.setUser(response.data.client_data))
                // setTimeout(() => {
                //     dispatch(setLoading(false))
                // }, 500);
                dispatch(setLoading(false))


            } catch (e) {
                console.log(e);
            }
        };

export const setUserName =
    (name: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(setLoading(true))
                await mainProtectedApi.updateUserName(name);
                dispatch(userActions.setUserName(name))
                dispatch(setLoading(false))
                dispatch(redirectUser('/my-profile'))
            } catch (e) {
                console.log(e);
            }
        };

export const updateNotifications =
    (text_message: boolean, email: boolean, unsubscribe: boolean): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const body = {
                    text_message,
                    email,
                    unsubscribe,
                }
                dispatch(userActions.setLoading(true))
                await mainProtectedApi.updateNotifications(body);
                dispatch(userActions.setUserNotification(body));
                dispatch(userActions.setLoading(false))
                dispatch(redirectUser('/my-profile'))
            } catch (e) {
                console.log(e);
            }
        };
export const changePhone =
    (phone: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(userActions.setLoading(true))
                const response = await mainProtectedApi.updatePhone({phone_number: phone});
                dispatch(userActions.setResponseCode(response.status.toString()))
                dispatch(userActions.setPhone(phone))
                dispatch(userActions.setLoading(false))
            } catch (e) {
                console.log(e);
                dispatch(userActions.setLoading(false))
            }
        };

export const updateEmail =
    (email: string): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                dispatch(userActions.setLoading(true))
                await mainProtectedApi.updateEmail({email: email});
                dispatch(userActions.setEmail(email))
                dispatch(userActions.setLoading(false))
                dispatch(redirectUser('/account-settings'))
            } catch (e) {
                console.log(e);
                dispatch(userActions.setLoading(false))
            }
        };


