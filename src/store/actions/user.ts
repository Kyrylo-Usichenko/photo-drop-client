import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<typeof userActions.setPhoneResponseCode
    // | typeof userActions.setPhoneResponseCode
    // | typeof userActions.getAlbums
    >

export const sendPhone =
    (phone: string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const response = await mainApi.sendPhone({
                    "phone_number": phone,
                });
                dispatch(userActions.setPhoneResponseCode(response.status.toString()));

            } catch (e) {
                console.log(e);
            }
        };


