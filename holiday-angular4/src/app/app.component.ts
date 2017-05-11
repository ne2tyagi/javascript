import { Component } from '@angular/core';

import { HolidayComponent } from './holidays/holiday.component';

@Component({
  selector: 'my-app',
  template: `
  <h1 class="md-title">Holidays USA 2015 {{name}}</h1>
  <nav class="mat-nav-list">
  	<h3><a class="md-primary md-button md-ink-ripple" routerLink="/holidays">Holidays</a>
    <a class="md-primary md-button md-ink-ripple" routerLink="/home">Home</a></h3>
  </nav>
  <md-content  layout-padding>
  <router-outlet></router-outlet>
  </md-content>`
})
export class AppComponent  { name = 'Angular'; }
