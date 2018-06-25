import { Component, OnInit } from '@angular/core';
import { Events } from '../../mock-events';
import { Event } from '../../event';

@Component({
  selector: 'upcoming-events-list',
  templateUrl: './upcoming-events-list.component.html',
  styleUrls: ['./upcoming-events-list.component.css']
})
export class UpcomingEventsListComponent implements OnInit {

  events: Event[] = Events

  constructor() { }

  ngOnInit() {
  }

}
