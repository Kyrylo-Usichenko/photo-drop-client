import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
    phoneResponseStatus: string | null
}

const initialState: UserState = {
    phoneResponseStatus: null
};


export class User extends ImmerReducer<UserState> {
    setPhoneResponseCode(phoneResponseCode: string) {
        this.draftState.phoneResponseStatus = phoneResponseCode;
    }

}

export default createReducerFunction(User, initialState);
