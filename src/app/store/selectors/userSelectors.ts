import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../types/user/userState.interface";

export const userFeatureSelector = createFeatureSelector<UserState>('user');

export const userSelector = createSelector(
    userFeatureSelector,
    (user: UserState) => user.user
);

export const userIsSubmittingSelector = createSelector(
    userFeatureSelector,
    (user: UserState) => user.isSubmitting
);

export const errorsSelector = createSelector(
    userFeatureSelector,
    (user: UserState) => user.error
);