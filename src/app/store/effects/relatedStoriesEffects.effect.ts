import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { GetRelatedStoriesAction, GetRelatedStoriesActionFailure, GetRelatedStoriesActionSuccess } from "../actions/createActions.action";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { GetJournalStory } from "src/app/modules/journal/services/journalStory.service";
import { JournalStory } from "src/app/modules/journal/types/journalStory.interface";


@Injectable()
export class relatedStoriesEffects{
    
    constructor(private actions$: Actions, private api: GetJournalStory){}
    
    relatedStories$ = createEffect(() => this.actions$.pipe(
        ofType(GetRelatedStoriesAction),
        switchMap(() => { //props
            return this.api.getRelatedStories().pipe(
                map((journalData: JournalStory[]) => {
                    console.log(journalData)
                    return GetRelatedStoriesActionSuccess({journalData})
                    }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(GetRelatedStoriesActionFailure({errors: errorResponse.error}))
                })
            )
        })
    ));
}