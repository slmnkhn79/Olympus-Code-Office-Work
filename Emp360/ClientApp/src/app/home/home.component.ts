import { Component, OnInit } from '@angular/core';
import {EmployeeList } from '../search/IEmployeeSearch';
import {HomeService} from './home.service';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

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
  .pipe(
    switchMap(value => this._homeService.search(this.queryField.value))
    
    );
    
 
  }
  getEmployees(query):any[]{
    this._homeService.getEmployeeList(null)
   ;
    return null;
  }
}


