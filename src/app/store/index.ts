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


export interface State {
  trendingClothes: trendingClothesState,
  newArrival: newArrivalState,
}

export const reducers: ActionReducerMap<State> = {
  trendingClothes: trendingClothesReducer,
  newArrival: newArrivalReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
