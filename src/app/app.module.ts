import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { FiveDayCalendarComponent } from './five-day-calendar/five-day-calendar.component';
import { UpcomingEventsListComponent } from './upcoming-events-list/upcoming-events-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    FiveDayCalendarComponent,
    UpcomingEventsListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
