import { createAction, props } from "@ngrx/store";
import { ActionTypesJournal, ActionTypesNewArrival, ActionTypesRegisterUser, ActionTypesTrending } from "./actions.types";
import { trendingClothesDataInterface } from "src/app/modules/trending-clothes/types/trendingClothesData.interface";
import { JournalStory } from "src/app/modules/journal/types/journalStory.interface";
import { userFormGroupData } from "src/app/modules/auth/types/userFormGroupData";

// Trending clothes
export const GetTrendingClothesAction = createAction(
    ActionTypesTrending.GET_TRENDING_CLOTHES,
 //   props<{trendingClothesData: trendingClothesDataInterface[] | []}>()
);
export const GetTrendingClothesActionSuccess = createAction(
    ActionTypesTrending.GET_TRENDING_CLOTHES_SUCCESS,
    props<{trendingClothesData: trendingClothesDataInterface[]}>()

);
export const GetTrendingClothesActionFailure = createAction(
    ActionTypesTrending.GET_TRENDING_CLOTHES_FAILURE,
    props<{errors: any}>()
);


//  New Arrival
export const GetNewArrivalAction = createAction(
    ActionTypesNewArrival.GET_NEW_ARRIVAL,
    props<{length: number}>()
);
export const GetNewArrivalActionSuccess = createAction(
    ActionTypesNewArrival.GET_NEW_ARRIVAL_SUCCESS,
    props<{newArrivalData: trendingClothesDataInterface[]}>()

);
export const GetNewArrivalActionFailure = createAction(
    ActionTypesNewArrival.GET_NEW_ARRIVAL_FAILURE,
    props<{errors: any}>()
);


//Journal Story
export const GetJournalStoryAction = createAction(
    ActionTypesJournal.GET_JOURNAL_STORY,
    props<{title: string}>()
);
export const GetJournalStoryActionSuccess = createAction(
    ActionTypesJournal.GET_JOURNAL_STORY_SUCCESS,
    props<{journalData: JournalStory[]}>()
);
export const GetJournalStoryActionFailure = createAction(
    ActionTypesJournal.GET_JOURNAL_STORY_FAILURE,
    props<{errors: any}>()
);

//Related Stories

export const GetRelatedStoriesAction = createAction(
    ActionTypesJournal.GET_RELATED_STORIES
);
export const GetRelatedStoriesActionSuccess = createAction(
    ActionTypesJournal.GET_RELATED_STORIES_SUCCESS,
    props<{journalData: JournalStory[]}>()
);
export const GetRelatedStoriesActionFailure = createAction(
    ActionTypesJournal.GET_RELATED_STORIES_FAILURE,
    props<{errors: any}>()
);


// register User

export const RegisterUserAction = createAction(
    ActionTypesRegisterUser.REGISTER_USER,
    props<{userData: userFormGroupData}>()
);
export const RegisterUserActionSuccess = createAction(
    ActionTypesRegisterUser.REGISTER_USER_SUCCESS,
    props<{userData: any}>()
);
export const RegisterUserActionFailure = createAction(
    ActionTypesRegisterUser.REGISTER_USER_FAILURE,
    props<{errors: string}>()
);


// login

// register User

export const LoginUserAction = createAction(
    ActionTypesRegisterUser.LOGIN_USER,
    props<{userData: userFormGroupData}>()
);
export const LoginUserActionSuccess = createAction(
    ActionTypesRegisterUser.LOGIN_USER_SUCCESS,
    props<{userData: any}>()
);
export const LoginUserActionFailure = createAction(
    ActionTypesRegisterUser.LOGIN_USER_FAILURE,
    props<{errors: string}>()
);


//logout
export const LogoutUserAction = createAction(
    ActionTypesRegisterUser.LOGOUT_USER,
);
export const LogoutUserActionSuccess = createAction(
    ActionTypesRegisterUser.LOGOUT_USER_SUCCESS
);
export const LogoutUserActionFailure = createAction(
    ActionTypesRegisterUser.LOGOUT_USER_FAILURE,
    props<{errors: string}>()
);


//changeName
export const  ChangeNameUserSuccess = createAction(
    ActionTypesRegisterUser.CHANGE_NAME_USER_SUCCESS,
    props<{name: string}>()
);
export const  ChangeNameUserFailure = createAction(
    ActionTypesRegisterUser.CHANGE_NAME_USER_FAILURE,
    props<{errors: string}>()
);