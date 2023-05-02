import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { trendingClothesState } from '../modules/trending-clothes/types/trendingClothesState.interface';
import { trendingClothesReducer } from './reducers/trendingClothesReducer';


export interface State {
  trendingClothes: trendingClothesState,
}

export const reducers: ActionReducerMap<State> = {
  trendingClothes: trendingClothesReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
