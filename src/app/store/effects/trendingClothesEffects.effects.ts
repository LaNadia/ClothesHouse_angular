import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { GetTrendingClothes } from "src/app/modules/trending-clothes/services/getTrendingClothes.service";
import { GetTrendingClothesAction, GetTrendingClothesActionFailure, GetTrendingClothesActionSuccess } from "../actions/createActions.action";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { trendingClothesDataInterface } from "src/app/modules/trending-clothes/types/trendingClothesData.interface";

@Injectable()
export class trendingClothesEffects{
    
    constructor(private actions$: Actions, private api: GetTrendingClothes){}
    
    trendingClothes$ = createEffect(() => this.actions$.pipe(
        ofType(GetTrendingClothesAction),
        switchMap(() => { //props
            return this.api.getTrendingClothes().pipe(
                map((trendingClothesData: trendingClothesDataInterface[]) => {
                    return GetTrendingClothesActionSuccess({trendingClothesData})
                    }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(GetTrendingClothesActionFailure({errors: errorResponse.error}))
                })
            )
        })
    ));

    // redirectAfterSubmit = createEffect(() => this.actions$.pipe(
    //     ofType(registerSuccessAction),
    //     tap(() => this.router.navigateByUrl('/'))
    //     ),
    //     {dispatch: false}
    // );
}