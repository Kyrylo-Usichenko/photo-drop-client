import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
    phoneResponseStatus: string | null,
    phone: string,
    isAuth: boolean,
    isLoading: boolean,
    selfie: string | null,
    tempSelfie: string | null
}

const initialState: UserState = {
    phoneResponseStatus: null,
    phone: '',
    isAuth: false,
    isLoading: false,
    selfie: null,
    tempSelfie: null
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
    setSelfie(url: string) {
        this.draftState.selfie = url;
    }
    setTempSelfie(photo: string | null) {
        this.draftState.tempSelfie = photo;
    }
}

export default createReducerFunction(User, initialState);
