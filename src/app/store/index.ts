import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { trendingClothesState } from './types/trendingIntefaces/trendingClothesState.interface';
import { trendingClothesReducer } from './reducers/trendingClothesReducer';
import { newArrivalState } from './types/newArrivalInterfaces/newArrivalState.interface';
import { newArrivalReducer } from './reducers/newArrivalReducer';
import { JournalStoryState } from './types/journalStoryInterfaces/journalStoryStateInterface.interface';
import { journalStoryReducer } from './reducers/journalStoryReducer';
import { relatedStoriesReducer } from './reducers/relatedStoriesReducer';
import { RelatedStoriesState } from './types/journalStoryInterfaces/relatedStoriesStateInterface.interface';
import { UserState } from './types/user/userState.interface';
import { userReducer } from './reducers/userReducer';


export interface State {
  trendingClothes: trendingClothesState,
  newArrival: newArrivalState,
  journalStory: JournalStoryState,
  relatedStories: RelatedStoriesState,
  user: UserState
}

export const reducers: ActionReducerMap<State> = {
  trendingClothes: trendingClothesReducer,
  newArrival: newArrivalReducer,
  journalStory: journalStoryReducer,
  relatedStories: relatedStoriesReducer,
  user: userReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
