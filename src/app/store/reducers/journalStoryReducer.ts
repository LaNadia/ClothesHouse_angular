import { createReducer, on } from "@ngrx/store";
import { GetJournalStoryAction, GetJournalStoryActionFailure, GetJournalStoryActionSuccess} from "../actions/createActions.action";
import { JournalStoryState } from "../types/journalStoryInterfaces/journalStoryStateInterface.interface";


const InitialState: JournalStoryState = {
    story: [],
    isSubmitting: false,
    error: null
};


export const journalStoryReducer = createReducer(
    InitialState,
    on(GetJournalStoryAction,
        (state): JournalStoryState => ({
            ...state,
            isSubmitting: true
    })),
    on(GetJournalStoryActionSuccess,
        (state, action): JournalStoryState => ({
            ...state,
            isSubmitting: false,
            story: action.journalData
    })),
    on(GetJournalStoryActionFailure,
        (state, action): JournalStoryState => ({
            ...state,
            isSubmitting: false,
            error: action.errors
    })),
);