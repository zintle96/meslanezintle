import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  // postMessage(input: any){
  //   return this.http.post(this.api, input, { responseType: 'text'}).pipe(map((response: any) => {
  //     if (response) {
  //       return response;
  //     }
  //   },
  //   (error: any) => {
  //     return error;
  //   }
  //   )
  //   )
  // }
}

