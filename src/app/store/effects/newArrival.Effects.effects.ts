import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { GetNewArrivalAction, GetNewArrivalActionFailure, GetNewArrivalActionSuccess } from "../actions/createActions.action";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { trendingClothesDataInterface } from "src/app/modules/trending-clothes/types/trendingClothesData.interface";
import { getNewArrivalClothes } from "src/app/modules/new-arrival/services/newArrivalService.service";

@Injectable()
export class newArrivalEffects{
    
    constructor(private actions$: Actions, private api: getNewArrivalClothes){}
    
    trendingClothes$ = createEffect(() => this.actions$.pipe(
        ofType(GetNewArrivalAction),
        switchMap(() => { //props
            return this.api.getNewArrivalClothes().pipe(
                map((newArrivalData: trendingClothesDataInterface[]) => {
                    return GetNewArrivalActionSuccess({newArrivalData})
                    }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(GetNewArrivalActionFailure({errors: errorResponse.error}))
                })
            )
        })
    ));
}