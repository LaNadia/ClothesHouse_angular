import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { trendingClothesDataInterface } from '../types/trendingClothesData.interface';

@Injectable()
export class GetTrendingClothes {

    constructor(private http: HttpClient) {}

    getTrendingClothes(): Observable<trendingClothesDataInterface[]>{
        return this.http.get<trendingClothesDataInterface[]>('https://fakestoreapi.com/products?limit=6').pipe(
            map((res: trendingClothesDataInterface[])=> res),
            catchError((error: HttpErrorResponse) => { console.error('Error emitted', error); return of([]); }),)
          }
    };
    

