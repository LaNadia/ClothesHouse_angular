import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  RegisterUserAction,
  RegisterUserActionFailure,
  RegisterUserActionSuccess,
} from '../actions/createActions.action';
import { from, of, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { userDataType } from 'src/app/modules/auth/types/userDataType.type';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private api: AuthService,
    private router: Router
  ) {}


  registerUser$ = createEffect(() =>
     this.actions$.pipe(
      ofType(RegisterUserAction),
      switchMap(({ userData }) => {
        console.log(userData);
        return from(this.api.register(userData.email, userData.password)).pipe(
          map((userData) => {
              console.log(userData);
              return RegisterUserActionSuccess({ userData: userData });
              }),
          catchError((errorResponse: HttpErrorResponse) => {
              console.log(errorResponse)
              return of(RegisterUserActionFailure({ errors: errorResponse.message }));
              })
        );
      })
    )
  );

  ////////////////

//   registerUser$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(RegisterUserAction),
//     switchMap(({ userData }) => {
//       console.log(userData);
//       return from(this.api.register(userData.email, userData.password)).pipe(
//         map((userData) => {
//           console.log(userData);
//           return RegisterUserActionSuccess({ userData });
//         }),
//         catchError((errorResponse: HttpErrorResponse) => {
//           return of(RegisterUserActionFailure({ errors: errorResponse.error }));
//         })
//       );
//     }),
    
//   )
// );

//////////////////

  //    map(({userData})=> {
  //     return this.api.register(userData.email, userData.password).map((res) => {
  //                     return RegisterUserActionSuccess(res)
  //             }),
  //     })))

  //     switchMap(({userData}) => { //props
  //          console.log(userData)
  //               return this.api.register(userData.email, userData.password).pipe(
  //                  map((res) => {
  //                      return RegisterUserActionSuccess(res)
  //                      }),

  //    )}),
  //                 catchError((errorResponse: HttpErrorResponse) => {
  //                     return of(RegisterUserActionFailure({errors: errorResponse.error}))
  //                 })
  //            ))

  redirectAfterRegistration$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterUserActionSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );
}
