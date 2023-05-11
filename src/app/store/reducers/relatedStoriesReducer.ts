import { createReducer, on } from "@ngrx/store";
import { GetRelatedStoriesAction, GetRelatedStoriesActionFailure, GetRelatedStoriesActionSuccess} from "../actions/createActions.action";
import { RelatedStoriesState } from "../types/journalStoryInterfaces/relatedStoriesStateInterface.interface";


const InitialState: RelatedStoriesState = {
    stories: [],
    isSubmitting: false,
    error: null
};


export const relatedStoriesReducer = createReducer(
    InitialState,
    on(GetRelatedStoriesAction,
        (state): RelatedStoriesState => ({
            ...state,
            isSubmitting: true
    })),
    on(GetRelatedStoriesActionSuccess,
        (state, action): RelatedStoriesState => ({
            ...state,
            isSubmitting: false,
            stories: action.journalData
    })),
    on(GetRelatedStoriesActionFailure,
        (state, action): RelatedStoriesState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),
);