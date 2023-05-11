import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
import { JournalStory } from "../types/journalStory.interface";

@Injectable()
export class GetJournalStory {

    constructor(private http: HttpClient) {}

    getJournalStory(title: string): Observable<JournalStory[]>{
        return this.http.get<JournalStory[]>(`https://poetrydb.org/title/${title}:abs`).pipe(
            map((res: JournalStory[]) => res),
            retry(3),
            catchError((error: HttpErrorResponse) => { console.error('Error emitted', error); return of([]); }),)
    };

    getRelatedStories(): Observable<JournalStory[]>{
        return this.http.get<JournalStory[]>('https://poetrydb.org/random/4').pipe(
            map((res: JournalStory[]) => {
                return res}),
            retry(3),
            catchError((error: HttpErrorResponse) => { console.error('Error emitted', error); return of([]); }),)
    };
};
    
