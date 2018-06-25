import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { FiveDayCalendarComponent } from './five-day-calendar/five-day-calendar.component';
import { UpcomingEventsListComponent } from './upcoming-events-list/upcoming-events-list.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    FiveDayCalendarComponent,
    UpcomingEventsListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
