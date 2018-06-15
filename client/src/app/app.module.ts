import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
// This is currently a lazy implementation, don't use it for production.
// You should always import material modules separately.
import { MwsMaterialModule } from './mws-material/mws-material.module';

import { MwsAppComponent } from './app.component';
import { MwsAccountMenuComponent } from './mws-account-menu/mws-account-menu.component';
import { MwsNavbarComponent } from './mws-navbar/mws-navbar.component';
import { MwsDashboardComponent } from './mws-dashboard/mws-dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MwsMaterialModule,
  ],
  declarations: [
    MwsAppComponent,
    MwsNavbarComponent,
    MwsDashboardComponent,
    MwsAccountMenuComponent,
  ],
  bootstrap: [
    MwsAppComponent,
  ],
  providers: [],
})
export class AppModule {}
