import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseURL = 'https://jsonplaceholder.typicode.com/'
  constructor(private http:HttpClient) {

   }
   getEmployeeList(query:string){
    return this.http.get(this.baseURL+'todos');
   }
}
