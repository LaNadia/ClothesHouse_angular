import { trendingClothesDataInterface } from "./trendingClothesData.interface";

export interface trendingClothesState {
    trendingClothes: trendingClothesDataInterface | [],
    isSubmitting: boolean,
    error: string | null
};
  
