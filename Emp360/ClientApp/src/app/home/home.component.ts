import { Component, OnInit } from '@angular/core';
import {EmployeeList } from '../search/IEmployeeSearch';
import {HomeService} from './home.service';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  queryField = new FormControl();
  filteredOptions: Observable<EmployeeList>;

  constructor(private _homeService :HomeService) {}
   

  ngOnInit() {
    this.filteredOptions = this.queryField.valueChanges
      .pipe(
        debounceTime(200),
        switchMap(value => this._homeService.search(this.queryField.value))
      );
    
 
  }
  getEmployees(query):any[]{
    this._homeService.getEmployeeList(null)
   ;
    return null;
  }
}


