import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
import { JournalStory } from "../types/journalStory.interface";

@Injectable()
export class GetJournalStory {

    constructor(private http: HttpClient) {}

    getJournalStory(): Observable<JournalStory[]>{
        return this.http.get<JournalStory[]>('https://poetrydb.org/random').pipe(
            map((res: JournalStory[]) => {
                return res}),
            retry(3),
            catchError((error: HttpErrorResponse) => { console.error('Error emitted', error); return of([]); }),)
    };
};
    
