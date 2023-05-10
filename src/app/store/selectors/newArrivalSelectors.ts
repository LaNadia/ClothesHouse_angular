import { createFeatureSelector, createSelector } from "@ngrx/store";
import { newArrivalState } from "../types/newArrivalInterfaces/newArrivalState.interface";

export const newArrivalFeatureSelector = createFeatureSelector<newArrivalState>('newArrival');

export const newArrivalSelector = createSelector(
    newArrivalFeatureSelector,
    (newArrival: newArrivalState) => newArrival.newArrival
);

export const newArrivalIsSubmittingSelector = createSelector(
    newArrivalFeatureSelector,
    (newArrival: newArrivalState) => newArrival.isSubmitting
);