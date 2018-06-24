import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { FiveDayCalendarComponent } from './five-day-calendar/five-day-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    FiveDayCalendarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
