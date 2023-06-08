
import { createReducer, on } from "@ngrx/store";
import { CartState } from "../types/cartInterfaces/cartInterface.interface";
import { AddToCartAction, AddToCartActionSuccess, AddToCartActionFailure } from "../actions/createActions.action";

const InitialState: CartState = {
    items: [],
    isSubmitting: false,
    error: null,
  };
  
export const cartReducer = createReducer(
    InitialState,
  
 //add to cart
 on(
    AddToCartAction,
    (state): CartState => ({
      ...state,
      isSubmitting: true,
      error: null,
    })
  ),
  on(
    AddToCartActionSuccess,
    (state, action): CartState => ({
      ...state,
      isSubmitting: false,
      items: action.items
    })
  ),
  on(
    AddToCartActionFailure,
    (state, action): CartState => ({
      ...state,
      isSubmitting: false,
      error: action.errors,
    })
  )

)