import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heros.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './hero/hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
    	path: 'heroes',
    	component: HeroesComponent
    },{
    	path: 'dashboard',
    	component: DashboardComponent
    },{
    	path: '',
    	redirectTo: '/dashboard',
    	pathMatch: 'full'
    },{
    	path: "detail/:id",
    	component: HeroDetailComponent
    }])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
