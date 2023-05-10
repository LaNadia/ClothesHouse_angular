import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
import { trendingClothesDataInterface } from "../../trending-clothes/types/trendingClothesData.interface";

@Injectable()
export class getNewArrivalClothes {

    constructor(private http: HttpClient) {}

    getNewArrivalClothes(): Observable<trendingClothesDataInterface[]>{
        return this.http.get<trendingClothesDataInterface[]>('https://fakestoreapi.com/products?limit=20').pipe(
            map((res: trendingClothesDataInterface[]) => res),
            retry(3),
            catchError((error: HttpErrorResponse) => { console.error('Error emitted', error); return of([]); }),)
    };
};
    

