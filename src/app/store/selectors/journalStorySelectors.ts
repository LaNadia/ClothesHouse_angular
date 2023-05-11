import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JournalStoryState } from "../types/journalStoryInterfaces/journalStoryStateInterface.interface";

export const journalStoryFeatureSelector = createFeatureSelector<JournalStoryState>('journalStory');

export const journalStorySelector = createSelector(
    journalStoryFeatureSelector,
    (journalStory: JournalStoryState) => journalStory.story
);

export const journalStoryIsSubmittingSelector = createSelector(
    journalStoryFeatureSelector,
    (journalStory: JournalStoryState) => journalStory.isSubmitting
);
