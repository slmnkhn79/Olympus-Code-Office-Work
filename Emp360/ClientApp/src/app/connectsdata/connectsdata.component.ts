import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Maneesha Nalwade', designation: 'GPM', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Sachin Nema', designation: 'SuperVisor', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Prashant Tokale', designation: 'Senior Ux Designer', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Town Hall', designation: 'GPM', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Prashant  Nalwade', designation: 'Senior Ux Designer', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Prashant Nalwade', designation: 'Senior Ux Designer', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Prashant Tokale', designation: 'Senior Ux Designer', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Town Hall', designation: 'GPM', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Prashant  Nalwade', designation: 'Senior Ux Designer', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},
  {name: 'Prashant Nalwade', designation: 'Senior Ux Designer', subject: 'UX', date: '7/6/2018',time:'11:00 AM',remark:'XYZ'},

  
];

@Component({
  selector: 'app-connectsdata',
  templateUrl: './connectsdata.component.html',
  styleUrls: ['./connectsdata.component.css']
})
export class ConnectsdataComponent implements OnInit {
  displayedColumns: string[] = ['name', 'designation', 'subject', 'date','time','remark'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  name: string;
  designation: string;
  subject: string;
  date: string;
  time: string;
  remark:string;
}