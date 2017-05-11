import { Component } from '@angular/core';

import { HolidayComponent } from './holidays/holiday.component';

@Component({
  selector: 'my-app',
  template: `
  <md-content>
  <h1 class="md-title">Holidays USA 2015 {{name}}</h1>
  <nav>
  	<a routerLink="/holidays">Holidays</a>
  	<a routerLink="/home">Home</a>
  </nav>
  <router-outlet></router-outlet>
  </md-content>`
})
export class AppComponent  { name = 'Angular'; }
