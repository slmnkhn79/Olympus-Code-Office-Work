import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private results;
  queryField: FormControl = new FormControl();
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.queryField
      .valueChanges
      .subscribe(() => this._homeService.getEmployeeList(null)
        .subscribe(
          (data) => {
            this.results = data;
            console.log('datais', data);
            console.log('restults', this.results);
          },
          (err) => {
            console.log(err);
          }
        ));
  }

}
