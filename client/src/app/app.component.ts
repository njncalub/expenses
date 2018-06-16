import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { MwsSidebarService } from './services/sidebar.service';

@Component({
  selector: 'mws-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class MwsAppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private sidebarService: MwsSidebarService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidebarService.setSidenav(this.sidenav);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
