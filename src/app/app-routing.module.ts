import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpcomingEventsListComponent } from './upcoming-events-list/upcoming-events-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { 
    path: 'home', component: HomePageComponent 
  },
  {
    path: 'upcoming-events', component: UpcomingEventsListComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
