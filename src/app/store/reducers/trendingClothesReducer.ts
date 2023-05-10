import { createReducer, on } from "@ngrx/store";
import { trendingClothesState } from "../types/trendingIntefaces/trendingClothesState.interface";
import { GetTrendingClothesAction, GetTrendingClothesActionFailure, GetTrendingClothesActionSuccess } from "../actions/createActions.action";


const InitialState: trendingClothesState = {
    trendingClothes: [],
    isSubmitting: false,
    error: null
};


export const trendingClothesReducer = createReducer(
    InitialState,
    on(GetTrendingClothesAction,
        (state): trendingClothesState => ({
            ...state,
            isSubmitting: true
    })),
    on(GetTrendingClothesActionSuccess,
        (state, action): trendingClothesState => ({
            ...state,
            isSubmitting: false,
            trendingClothes: action.trendingClothesData
    })),
    on(GetTrendingClothesActionFailure,
        (state, action): trendingClothesState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),


);