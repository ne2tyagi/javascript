import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';


import { AppComponent }  from './app.component';
import { HolidayComponent } from './holidays/holiday.component';
import { HolidayDetailsComponent } from './holidays/holiday-details.component';
import { HomeComponent } from './home.component';
import { HolidayService } from './holidays/holiday.service';

@NgModule({
  imports:      [ 
	  BrowserModule, 
	  BrowserAnimationsModule,
	  MaterialModule,
	  HttpModule, 
	  JsonpModule,
	  RouterModule.forRoot([
	  	{ path : '', redirectTo: '/holidays', pathMatch: 'full'},
	  	{ path : 'holidays', component: HolidayComponent },
	  	{ path : 'home', component: HomeComponent },
	  	{ path : 'holidayDetail/:holidayName', component: HolidayDetailsComponent }
	  ])
  ],
  declarations: [ AppComponent, HomeComponent, HolidayComponent, HolidayDetailsComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ HolidayService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
