import { Component, OnInit } from '@angular/core';


import { Hero } from '../hero/hero.model';
import { HeroService } from '../hero/hero.service';

@Component({
	selector:'my-dashboard',
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	heros : Hero[];
	selectedHero: Hero;
  constructor(private heroService: HeroService){

  }

  ngOnInit(): void{
  	this.heroService.getHeros().then(heroes => this.heros = heroes);
  }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

}