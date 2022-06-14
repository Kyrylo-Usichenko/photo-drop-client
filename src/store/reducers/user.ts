import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
    phoneResponseStatus: string | null,
    phone: string,
    isAuth: boolean,
    isLoading: boolean,
}

const initialState: UserState = {
    phoneResponseStatus: null,
    phone: '',
    isAuth: false,
    isLoading: false
};


export class User extends ImmerReducer<UserState> {
    setPhoneResponseCode(phoneResponseCode: string | null) {
        this.draftState.phoneResponseStatus = phoneResponseCode;
    }
    setPhone(phone: string) {
        this.draftState.phone = phone;
    }
    setAuth(isAuth: boolean) {
        this.draftState.isAuth = isAuth;
    }
    setLoading(isLoading: boolean) {
        this.draftState.isLoading = isLoading;
    }
}

export default createReducerFunction(User, initialState);
