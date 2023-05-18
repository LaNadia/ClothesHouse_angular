import { createReducer, on } from "@ngrx/store";
import { UserState } from "../types/user/userState.interface";
import { LoginUserAction, LoginUserActionFailure, LoginUserActionSuccess, LogoutUserAction, LogoutUserActionFailure, LogoutUserActionSuccess, RegisterUserAction, RegisterUserActionFailure, RegisterUserActionSuccess, } from "../actions/createActions.action";


const InitialState: UserState = {
    user: {
        email: null,
        token: null,
        uid: null,
        displayName: null,
        photoUrl: null
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
                token: action.userData.apiKey,
                uid: action.userData.uid,
                displayName: action.userData.displayName,
                photoUrl: action.userData.photoURL,
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
                token: action.userData.apiKey,
                uid: action.userData.uid,
                displayName: action.userData.displayName,
                photoUrl: action.userData.photoURL,
            }
    })),
    on(LoginUserActionFailure,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),

    //logout

    on(LogoutUserAction,
        (state): UserState => ({
            ...state,
            isSubmitting: true,
            error: null
    })),
    on(LogoutUserActionSuccess,
        (state): UserState => ({
            ...state,
            isSubmitting: false,
            user: {
                email: null,
                token: null,
                uid: null,
                displayName: null,
                photoUrl: null
            }
    })),
    on(LogoutUserActionFailure,
        (state, action): UserState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),

);