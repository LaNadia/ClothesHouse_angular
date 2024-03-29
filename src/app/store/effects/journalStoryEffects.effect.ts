import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { GetJournalStoryAction, GetJournalStoryActionFailure, GetJournalStoryActionSuccess, GetNewArrivalAction, GetNewArrivalActionFailure, GetNewArrivalActionSuccess } from "../actions/createActions.action";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { GetJournalStory } from "src/app/modules/journal/services/journalStory.service";
import { JournalStory } from "src/app/modules/journal/types/journalStory.interface";


@Injectable()
export class journalStoryEffects{
    
    constructor(private actions$: Actions, private api: GetJournalStory){}
    
    journalStory$ = createEffect(() => this.actions$.pipe(
        ofType(GetJournalStoryAction),
        switchMap(({title}) => { //props
            return this.api.getJournalStory(title).pipe(
                map((journalData: JournalStory[]) => {
                    console.log(journalData)
                    return GetJournalStoryActionSuccess({journalData})
                    }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(GetJournalStoryActionFailure({errors: errorResponse.error}))
                })
            )
        })
    ));
}