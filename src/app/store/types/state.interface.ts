import { newArrivalState } from "./newArrivalInterfaces/newArrivalState.interface";
import { trendingClothesState } from "./trendingIntefaces/trendingClothesState.interface";

export interface StateInterface {
  trendingClothes: trendingClothesState,
  newArrival: newArrivalState
}