import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, retry } from 'rxjs';
import {  CheckUsProduct, CheckUsProducts } from '../types/checkUsProducts.interface';


@Injectable({
  providedIn: 'root'
})
export class CheckUsService {

  constructor(private http: HttpClient) { }

  getCheckUsPics(): Observable<CheckUsProduct[] | []> {

    return this.http.get<CheckUsProducts>('https://dummyjson.com/products?limit=5').pipe(
        map((res: CheckUsProducts) => res.products),
        retry(3),
        catchError((error: HttpErrorResponse) => { console.error('Error emitted', error); return of([])})
        )
  }
}
