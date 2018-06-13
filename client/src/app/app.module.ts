import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    AppMaterialModule,
  ],
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppDashboardComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [],
})
export class AppModule {}
