import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
// This is currently a lazy implementation, don't use it for production.
// You should always import material modules separately.
import { MwsMaterialModule } from './shared/material.module';

import { MwsAppComponent } from './app.component';
import { MwsMenuComponent } from './layout/menu/menu.component';
import { MwsNavbarComponent } from './layout/navbar/navbar.component';
import { MwsSidebarComponent } from './layout/sidebar/sidebar.component';
import { MwsSearchbarComponent } from './layout/searchbar/searchbar.component';

import { MwsHomeComponent } from './pages/home/home.component';

import { MwsSidebarService } from './services/sidebar.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MwsMaterialModule,
    FlexLayoutModule,
    AppRoutesModule,
  ],
  declarations: [
    MwsAppComponent,
    MwsNavbarComponent,
    MwsHomeComponent,
    MwsSidebarComponent,
    MwsSearchbarComponent,
    MwsMenuComponent,
  ],
  bootstrap: [
    MwsAppComponent,
  ],
  providers: [
    MwsSidebarService,
  ],
})
export class AppModule {}
