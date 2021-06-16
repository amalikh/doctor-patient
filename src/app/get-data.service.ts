import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private apiurl="http://localhost:8080/clinics";
  // apiurl="https://jsonplaceholder.typicode.com/todos"

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.apiurl);
  }
}
