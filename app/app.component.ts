import { Component } from '@angular/core';
import { Hero } from './hero';
import { Villain } from './villain';
import { HeroService } from './hero.service';
import { VillainService } from './villain.service';
import { OnInit } from '@angular/core';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  template: 'app/app.component.html',
  styles: ['app/app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private heroService: HeroService, private villainService: VillainService) { }

  title = 'My Heroic Quest';
  heroes: Hero[];
  villains: Villain[];
  selectedHero: Hero;
  errorMessage: string;

  genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];

  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  getVillains(): void {
    this.villainService.getVillains().then(villains => this.villains = villains);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
