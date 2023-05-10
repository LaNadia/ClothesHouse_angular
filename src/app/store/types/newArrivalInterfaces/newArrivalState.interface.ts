import { trendingClothesDataInterface } from "../../../modules/trending-clothes/types/trendingClothesData.interface";

export interface newArrivalState {
    newArrival: trendingClothesDataInterface[] | [],
    isSubmitting: boolean,
    error: string | null
};
  