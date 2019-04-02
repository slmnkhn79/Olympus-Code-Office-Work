import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  testbaseURL = 'https://jsonplaceholder.typicode.com/'
  baseURL ='http://localhost:50673/api/'
  constructor(private http:HttpClient) {

   }
   getEmployeeList(query:string){
     return this.http.get(this.baseURL +'E360DataService/GetEmployeeList?name='+query);
   }
   search(query:string){
    return this.http.get(this.testbaseURL)  }
}
