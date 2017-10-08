import { Component, OnInit,  } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
	selector: 'hero-detail',
	templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
	hero : Hero;
	constructor(private heroService: HeroService, 
		private route: ActivatedRoute
	){

	}
	ngOnInit(): void {
		this.route.paramMap
		.switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
		.subscribe(hero => this.hero = hero)
	}
}