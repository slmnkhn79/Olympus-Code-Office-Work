import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectsdataComponent } from './connectsdata.component';

describe('ConnectsdataComponent', () => {
  let component: ConnectsdataComponent;
  let fixture: ComponentFixture<ConnectsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
