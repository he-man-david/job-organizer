import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingInterviewsComponent } from './upcoming-interviews.component';

describe('UpcomingInterviewsComponent', () => {
  let component: UpcomingInterviewsComponent;
  let fixture: ComponentFixture<UpcomingInterviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingInterviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingInterviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
