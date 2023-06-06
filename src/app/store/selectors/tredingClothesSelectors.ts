import { createFeatureSelector, createSelector } from '@ngrx/store';
import { trendingClothesState } from 'src/app/store/types/trendingIntefaces/trendingClothesState.interface';

export const trendingClothesFeatureSelector =
  createFeatureSelector<trendingClothesState>('trendingClothes');

export const trendingClothesSelector = createSelector(
  trendingClothesFeatureSelector,
  (trendingClothes: trendingClothesState) => trendingClothes.trendingClothes
);

export const trendingClothesIsSubmittingSelector = createSelector(
  trendingClothesFeatureSelector,
  (trendingClothes: trendingClothesState) => trendingClothes.isSubmitting
);
