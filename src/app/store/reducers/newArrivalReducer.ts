import { createReducer, on } from "@ngrx/store";
import { GetNewArrivalAction, GetNewArrivalActionFailure, GetNewArrivalActionSuccess} from "../actions/createActions.action";
import { newArrivalState } from "../types/newArrivalInterfaces/newArrivalState.interface";


const InitialState: newArrivalState = {
    newArrival: [],
    isSubmitting: false,
    error: null
};


export const newArrivalReducer = createReducer(
    InitialState,
    on(GetNewArrivalAction,
        (state): newArrivalState => ({
            ...state,
            isSubmitting: true
    })),
    on(GetNewArrivalActionSuccess,
        (state, action): newArrivalState => ({
            ...state,
            isSubmitting: false,
            newArrival: action.newArrivalData
    })),
    on(GetNewArrivalActionFailure,
        (state, action): newArrivalState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),


);