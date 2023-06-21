import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of } from 'rxjs';
import {
  AddToCartAction,
  AddToCartActionFailure,
  AddToCartActionSuccess,
  ChangeCartQuantityAction,
} from '../actions/createActions.action';

@Injectable()
export class cartEffects {
  constructor(private actions$: Actions) {}

  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AddToCartAction),
      map(({ items }) => { //props
        return AddToCartActionSuccess({ items });
      }),
      catchError((errors: string) => {
        return of(AddToCartActionFailure({ errors }));
      })
    )
  );

  changeCartQuantity$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ChangeCartQuantityAction),
    map(({ items }) => { //props
      return AddToCartActionSuccess({ items });
    }),
    catchError((errors: string) => {
      return of(AddToCartActionFailure({ errors }));
    })
  )
);

}
