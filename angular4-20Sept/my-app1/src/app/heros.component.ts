import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero/hero.model';
import { HeroService } from './hero/hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroesComponent {
	selectedHero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
  
  heros : Hero[];
  constructor(private heroService: HeroService, private router: Router){

  }

  ngOnInit(): void{
  	this.heroService.getHeros().then(heroes => this.heros = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }


  getDetails(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

