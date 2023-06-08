import { trendingClothesDataInterface } from "src/app/modules/trending-clothes/types/trendingClothesData.interface";

export interface CartState {
    items: trendingClothesDataInterface[] | [];
    isSubmitting: boolean;
    error: string | null;
  }
  