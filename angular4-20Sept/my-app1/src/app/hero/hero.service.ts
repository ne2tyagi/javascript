import { Injectable } from '@angular/core';

import { Hero } from './hero.model';
import { HEROS } from './mock-heroes';

@Injectable()
export class HeroService{
	hero: Hero;
	getHeros(): Promise<Hero[]>{
		//simulate 2 sec delay
		return new Promise(resolve => {
			setTimeout(() => resolve(HEROS), 2000)
		});
	}

	getHero(id: number) : Promise<Hero>{

	return this.getHeros().then(heroes => heroes.find(hero => hero.id == id));
	}
}