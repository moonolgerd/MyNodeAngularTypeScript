import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[]
    selectedHero: Hero
    constructor(private heroService: HeroService) { }

    async ngOnInit() {
        this.heroes = await this.heroService.get()
    }

    addHero() {
        this.selectedHero = <Hero>{
            name: 'New Hero'
        }
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero
    }
}
