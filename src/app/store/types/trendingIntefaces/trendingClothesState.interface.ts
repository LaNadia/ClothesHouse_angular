import { trendingClothesDataInterface } from '../../../modules/trending-clothes/types/trendingClothesData.interface';

export interface trendingClothesState {
  trendingClothes: trendingClothesDataInterface[] | [];
  isSubmitting: boolean;
  error: string | null;
}
