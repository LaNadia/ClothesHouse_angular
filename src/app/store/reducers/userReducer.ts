import { createReducer, on } from "@ngrx/store";
import { UserState } from "../types/user/userState.interface";
import { LoginUserAction, LoginUserActionFailure, LoginUserActionSuccess, RegisterUserAction, RegisterUserActionFailure, RegisterUserActionSuccess, } from "../actions/createActions.action";
import { OAuthCredential } from "firebase/auth";


const InitialState: UserState = {
    user: {
        email: null,
        token: null,
        uid: null,
    },
    isSubmitting: false,
    error: null
};


export const userReducer = createReducer(
    InitialState,

    //register
    on(RegisterUserAction,
        (state): UserState => ({
            ...state,
            isSubmitting: true,
            error: null
    })),
    on(RegisterUserActionSuccess,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            user: {
                email: action.userData.email,
                token: action.userData._delegate.accessToken,
                uid: action.userData.uid
            }
    })),
    on(RegisterUserActionFailure,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),

    //login
    on(LoginUserAction,
        (state): UserState => ({
            ...state,
            isSubmitting: true,
            error: null
    })),
    on(LoginUserActionSuccess,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            user: {
                email: action.userData.email,
                token: action.userData._delegate.accessToken,
                uid: action.userData.uid
            }
    })),
    on(LoginUserActionFailure,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),

);