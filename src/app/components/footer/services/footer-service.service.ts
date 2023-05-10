import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

let HTTP = 'https://httpbin.org/post';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private http: HttpClient) {};

   submitForm(email: String,){
        // let params: RequestInit = {
        //   method: "POST",
        //   body: JSON.stringify(email)
        // };

        // return this.http.post(HTTP, email).subscribe((data:any) => data);




        //only request and map is not necessary here actually.
        //but if we get many responses we can you map to extract the data
        //or pass catcherror
        //{observe: 'response'} to get only response with headers and body, noot just the body data
         return this.http.post(HTTP, email, {observe: 'response'}).pipe(
          map((res)=> res),
          catchError((error: HttpErrorResponse) => { console.error('Error emitted', error); return of([]); }),)
        }
          
}

