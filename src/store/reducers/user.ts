import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
    phoneResponseStatus: string | null,
    phone: string
}

const initialState: UserState = {
    phoneResponseStatus: null,
    phone: '',
};


export class User extends ImmerReducer<UserState> {
    setPhoneResponseCode(phoneResponseCode: string) {
        this.draftState.phoneResponseStatus = phoneResponseCode;
    }
    setPhone(phone: string) {
        this.draftState.phone = phone;
    }

}

export default createReducerFunction(User, initialState);
