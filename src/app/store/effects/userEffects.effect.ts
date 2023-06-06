import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  ChangeNameUserSuccess,
  LoginUserAction,
  LoginUserActionFailure,
  LoginUserActionSuccess,
  LogoutUserAction,
  LogoutUserActionFailure,
  LogoutUserActionSuccess,
  RegisterUserAction,
  RegisterUserActionFailure,
  RegisterUserActionSuccess,
} from '../actions/createActions.action';
import { from, of, catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { uploadNameService } from 'src/app/modules/profile/services/updateNameSerive.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private api: AuthService,
    private router: Router,
    private uploadName: uploadNameService
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

  loginUser$ = createEffect(() =>
  this.actions$.pipe(
   ofType(LoginUserAction),
   switchMap(({ userData }) => {
     console.log(userData);
     return from(this.api.login(userData.email, userData.password)).pipe(
       map((userData) => {
           console.log(userData);
           return LoginUserActionSuccess({ userData: userData });
           }),
       catchError((errorResponse: HttpErrorResponse) => {
           console.log(errorResponse)
           return of(LoginUserActionFailure({ errors: errorResponse.message }));
           })
     );
   })
 )
);

logoutUser$ = createEffect(() =>
this.actions$.pipe(
 ofType(LogoutUserAction),
 switchMap(() => {
   return from(this.api.logout()).pipe(
     map((userData) => {
         console.log(userData);
         return LogoutUserActionSuccess();
         }),
     catchError((errorResponse: HttpErrorResponse) => {
         console.log(errorResponse)
         return of(LogoutUserActionFailure({ errors: errorResponse.message }));
         })
   );
 })
)
);

  redirectAfterRegistrationOrLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RegisterUserActionSuccess, LoginUserActionSuccess, LogoutUserActionSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    { dispatch: false }
  );

  reloadPageAfterNameChange$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ChangeNameUserSuccess),
        tap(() => location.reload())
      ),
    { dispatch: false }
  );
}
