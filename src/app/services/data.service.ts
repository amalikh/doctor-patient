import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    // private http:HttpClient
    ) {
      
   }
   title= "Doctor Patient Portal";

  //  getData(){
  //   let apiurl="https://jsonplaceholder.typicode.com/users";
  //   return this.http.get(apiurl);
  // }
}
