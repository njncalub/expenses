import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { MwsSidebarService } from '../mws-sidebar/mws-sidebar.service';

@Component({
  selector: 'mws-navbar',
  templateUrl: './mws-navbar.component.html',
  styleUrls: ['./mws-navbar.component.css'],
})
export class MwsNavbarComponent implements OnDestroy {
  readonly title = 'My Expenses';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private sidebarService: MwsSidebarService,
              changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  handleMenuClick(): void {
    this.sidebarService
      .open()
      .then(() => { });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
