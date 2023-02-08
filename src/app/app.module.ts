import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './shareds/dashboard/dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:"apiUrl" , useValue:"http://localhost:5151/api/"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
