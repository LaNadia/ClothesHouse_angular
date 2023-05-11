import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RelatedStoriesState } from "../types/journalStoryInterfaces/relatedStoriesStateInterface.interface";

export const relatedStoriesFeatureSelector = createFeatureSelector<RelatedStoriesState>('relatedStories');

export const relatedStoriesSelector = createSelector(
    relatedStoriesFeatureSelector,
    (relatedStories: RelatedStoriesState) => relatedStories.stories
);

export const relatedStoriesIsSubmittingSelector = createSelector(
    relatedStoriesFeatureSelector,
    (relatedStories: RelatedStoriesState) => relatedStories.isSubmitting
);
