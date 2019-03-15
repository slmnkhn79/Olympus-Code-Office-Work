import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar-responsive',
  templateUrl: './sidebar-responsive - Copy.component.html',
  styleUrls: ['./sidebar-responsive.component.css']
})
export class SidebarResponsiveComponent implements OnInit ,OnDestroy{

  mobileQuery: MediaQueryList;

  fillerNav = Array.from(['Home','Test']);

  // fillerContent = Array.from({length: 50}, () =>
  //     'test');
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
