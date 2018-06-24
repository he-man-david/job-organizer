import { Component, OnInit } from '@angular/core';

import { Job } from '../job';
import { Jobs } from '../mock-jobs';

@Component({
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Job[] = Jobs;

  constructor() { }

  ngOnInit() {
  }

}
