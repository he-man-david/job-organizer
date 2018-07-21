import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'job-details-page',
  templateUrl: './job-details-page.component.html',
  styleUrls: ['./job-details-page.component.css']
})
export class JobDetailsPageComponent implements OnInit {

  progressData = { 'percentage': 0.61, 'status': '2nd Round Interview' };

  constructor() { }

  ngOnInit() {
  }

}
