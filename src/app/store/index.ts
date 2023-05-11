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


export interface State {
  trendingClothes: trendingClothesState,
  newArrival: newArrivalState,
  journalStory: JournalStoryState
}

export const reducers: ActionReducerMap<State> = {
  trendingClothes: trendingClothesReducer,
  newArrival: newArrivalReducer,
  journalStory: journalStoryReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
