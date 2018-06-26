import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { JobListComponent } from './home-page/job-list/job-list.component';
import { FiveDayCalendarComponent } from './home-page/five-day-calendar/five-day-calendar.component';
import { UpcomingEventsListComponent } from './upcoming-events-list/upcoming-events-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { JobDetailsPageComponent } from './job-details-page/job-details-page.component';
import { JobDetailCardComponent } from './job-details-page/job-detail-card/job-detail-card.component';


@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    FiveDayCalendarComponent,
    UpcomingEventsListComponent,
    HomePageComponent,
    JobDetailsPageComponent,
    JobDetailCardComponent
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
