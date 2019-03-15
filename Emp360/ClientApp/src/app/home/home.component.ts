import { Component, OnInit } from '@angular/core';
import {EmployeeList } from '../search/IEmployeeSearch';
import {HomeService} from './home.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private results;
  queryField: FormControl = new FormControl();
  constructor(private _homeService :HomeService) {}
   

  ngOnInit() {
    this.queryField
      .valueChanges
      .subscribe(() => this._homeService.getEmployeeList(this.queryField.value)
    .subscribe(
      (data) =>{
        this.results = data;
        console.log('datais',data);
        console.log('restults',this.results);
      },
      (err)=>{
          console.log(err);
      }
      ));
    
 
  }
  getEmployees(query):any[]{
    this._homeService.getEmployeeList(null)
   ;
    return null;
  }
}


