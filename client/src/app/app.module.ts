import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
// This is currently a lazy implementation, don't use it for production.
// You should always import material modules separately.
import { MwsMaterialModule } from './mws-material/mws-material.module';

import { MwsAppComponent } from './app.component';
import { MwsAccountMenuComponent } from './mws-account-menu/mws-account-menu.component';
import { MwsNavbarComponent } from './mws-navbar/mws-navbar.component';
import { MwsSearchbarComponent } from './mws-searchbar/mws-searchbar.component';
import { MwsHomeComponent } from './mws-home/mws-home.component';

import { appRoutes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MwsMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
  ],
  declarations: [
    MwsAppComponent,
    MwsNavbarComponent,
    MwsHomeComponent,
    MwsSearchbarComponent,
    MwsAccountMenuComponent,
  ],
  bootstrap: [
    MwsAppComponent,
  ],
  providers: [],
})
export class AppModule {}
