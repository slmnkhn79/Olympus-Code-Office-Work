import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs'
import { EmployeeList } from './IEmployeeSearch';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  queryField = new FormControl();
  filteredOptions: Observable<EmployeeList>;

  constructor(private fb: FormBuilder,private _homeService: HomeService) { }


  ngOnInit() {
    this.filteredOptions = this.queryField.valueChanges
      .pipe(
        debounceTime(200),
        switchMap(value => this._homeService.search(this.queryField.value))
      );
  }

  displayFn(user: EmployeeList) {
    if (user) { return user.name; } 
  }
  }

