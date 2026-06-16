import { Component } from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-meeting-layout',
  templateUrl: './meeting-layout.component.html',
  styleUrl: './meeting-layout.component.scss'
})
export class MeetingLayoutComponent {

  pageInfo = 'Create Meeting';
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(event => {
        if (event['header']) {
          debugger
          this.pageInfo = event['header'];
        }
      });
  }

  ngOnInit() {

  }

  
}
