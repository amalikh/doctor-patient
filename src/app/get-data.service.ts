import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";



@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  // Define API
  apiurl = "http://localhost:8080/clinics";
  // private apiurl: string="https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) {}
  // httpHeader = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }


  getData() {

    return this.http.get<any>(this.apiurl)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  postClinic(data: any) {
    return this.http.post<any>(this.apiurl, data)
      .pipe(map((res: any) => {
        return res;
        
      }))
  }


  deleteClinic(id:number) {
    console.log("this is a url " + this.apiurl + "/" + id)
    return this.http.delete<any>(this.apiurl + '/' + id).pipe(map((res:any)=>{
      return res;
    }))

  }

  // deleteClinic(id){
  //   return this.http.delete(this.apiurl + '/' + id, this.httpOptions)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }



  updateClinic(data: any, id: number) {
    return this.http.put<any>(this.apiurl + '/' + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }





}
