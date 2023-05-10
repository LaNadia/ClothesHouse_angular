import { createAction, props } from "@ngrx/store";
import { ActionTypesTrending } from "./actions.types";
import { trendingClothesDataInterface } from "src/app/modules/trending-clothes/types/trendingClothesData.interface";

// Trending clothes
export const GetTrendingClothesAction = createAction(
    ActionTypesTrending.GET_TRENDING_CLOTHES,
 //   props<{trendingClothesData: trendingClothesDataInterface[] | []}>()
);
export const GetTrendingClothesActionSuccess = createAction(
    ActionTypesTrending.GET_TRENDING_CLOTHES_SUCCESS,
    props<{trendingClothesData: trendingClothesDataInterface[]}>()

);
export const GetTrendingClothesActionFailure = createAction(
    ActionTypesTrending.GET_TRENDING_CLOTHES_FAILURE,
    props<{errors: any}>()
);


//  New Arrival
export const GetNewArrivalAction = createAction(
    ActionTypesTrending.GET_NEW_ARRIVAL
);
export const GetNewArrivalActionSuccess = createAction(
    ActionTypesTrending.GET_NEW_ARRIVAL_SUCCESS,
    props<{newArrivalData: trendingClothesDataInterface[]}>()

);
export const GetNewArrivalActionFailure = createAction(
    ActionTypesTrending.GET_NEW_ARRIVAL_FAILURE,
    props<{errors: any}>()
);