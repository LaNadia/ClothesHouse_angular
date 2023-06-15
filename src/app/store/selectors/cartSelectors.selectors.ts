import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../types/cartInterfaces/cartInterface.interface';

export const cartSelector = createFeatureSelector<CartState>('cart');

export const cartItemsSelector = createSelector(
    cartSelector,
    (cart: CartState) => cart.items
);

export const cartIsSubmittingSelector = createSelector(
    cartSelector,
    (cart: CartState) => cart.isSubmitting
);

export const cartErrorsSelector = createSelector(
    cartSelector,
    (cart: CartState) => cart.error
);
