import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveDayCalendarComponent } from './five-day-calendar.component';

describe('FiveDayCalendarComponent', () => {
  let component: FiveDayCalendarComponent;
  let fixture: ComponentFixture<FiveDayCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveDayCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveDayCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
