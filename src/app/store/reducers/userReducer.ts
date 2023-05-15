import { createReducer, on } from "@ngrx/store";
import { UserState } from "../types/user/userState.interface";
import { RegisterUserAction, RegisterUserActionFailure, RegisterUserActionSuccess, } from "../actions/createActions.action";
import { OAuthCredential } from "firebase/auth";


const InitialState: UserState = {
    email: null,
    token: null,
    uid: null,
    isSubmitting: false,
    error: null
};


export const userReducer = createReducer(
    InitialState,
    on(RegisterUserAction,
        (state): UserState => ({
            ...state,
            isSubmitting: true
    })),
    on(RegisterUserActionSuccess,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            email: action.userData.email,
            token: action.userData._delegate.accessToken,
            uid: action.userData.uid
    })),
    on(RegisterUserActionFailure,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),


);