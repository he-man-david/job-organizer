import { Component, AfterViewInit, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';
import { timer } from 'rxjs/observable/timer';
import { map, take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css']
})
export class ProgressCircleComponent implements AfterViewInit {
  @ViewChild('progressCircle') element: ElementRef;
  @Input('progressData') progressData: any;
  parent: d3.selection;
  SVG: d3.selection;
  width: number;
  height: number;
  radius: number       = 160;
  border: number       = 50;
  padding: number      = 0;
  startPercent: number = 0;
  endPercent: number;
  color: string        = '#11E8CE';
  twoPi                = Math.PI * 2;
  formatPercent        = d3.format('.0%');
  boxSize              = (this.radius + this.padding) * 2 + 30;
  count: number;
  step                 = this.endPercent < this.startPercent ? -0.01 : 0.01;
  arc: any;
  defs: any;
  filter: any;
  progress = this.startPercent;
  g: any;
  meter: any;
  foreground: any;
  front: any;
  numberText: any;

 
  constructor() { }

  ngAfterViewInit() {
    this.parent     = d3.select(this.element.nativeElement);
    this.endPercent = this.progressData.percentage;
    this.creatingArc();
    this.createCircle();
    this.stylingCircle();
    this.loops()
  }


  private creatingArc() {
    this.arc = d3.arc()
                 .startAngle(0)
                 .innerRadius(this.radius)
                 .outerRadius(this.radius - this.border);
  }

  private createCircle() {
    this.count = Math.abs((this.endPercent - this.startPercent) / 0.01) + 1;
    this.SVG   = this.parent.append('svg')
                          .attr('width', this.boxSize)
                          .attr('height', this.boxSize);
    this.g     = this.SVG.append('g')
                     .attr('transform', 'translate(' + this.boxSize / 2 + ',' + this.boxSize / 2 + ')');
    this.meter = this.g.append('g')
                 .attr('class', 'progress-meter');
  }

  private stylingCircle() {
    this.defs       = this.SVG.append('defs');
    this.filter     = this.defs.append('filter')
                               .attr('id', 'blur');
                      this.filter.append('feGaussianBlur')
                                 .attr('in', 'SourceGraphic')
                                 .attr('stdDeviation', '7');
                      this.meter.append('path')
                                .attr('class', 'background')
                                .attr('fill', '#ccc')
                                .attr('fill-opacity', 0.5)
                                .attr('d', this.arc.endAngle(this.twoPi));
    this.foreground = this.meter.append('path')
                                .attr('class', 'foreground')
                                .attr('fill', this.color)
                                .attr('fill-opacity', 1)
                                .attr('stroke', this.color)
                                .attr('stroke-width', 5)
                                .attr('stroke-opacity', 1)
                                .attr('filter', 'url(#blur)');

    this.front      = this.meter.append('path')
                                .attr('class', 'foreground')
                                .attr('fill', this.color)
                                .attr('fill-opacity', 1);

    this.numberText = this.meter.append('text')
                                .attr('fill', this.color)
                                .attr('text-anchor', 'middle')
                                .style('font-family', '"Helvetica Neue", Helvetica, Arial, sans-serif')
                                .style('font-size', '65px')
                                .style('font-weight', 'bold')
                                .attr('dy', '.35em')
                                .attr('dx', '.10em');
  }

  private updateProgress() {
    this.foreground.attr('d', this.arc.endAngle(this.twoPi * this.progress));
    this.front.attr('d', this.arc.endAngle(this.twoPi * this.progress));
    
    this.numberText.text(this.formatPercent(this.progress));
  }

  private loops() {
    timer(10, 10)
    .pipe(
      map(i => this.count--),
      takeWhile(counter => counter >= 0),
      take(this.count)
    )
    .subscribe(i => {
      console.log(this.count);
      this.updateProgress();
      this.progress += this.step;
    })
  }

}
