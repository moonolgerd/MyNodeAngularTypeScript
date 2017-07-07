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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'My Heroic Quest';
  heroes: Hero[];
  villains: Villain[];
  selectedHero: Hero;
  selectedVillain: Villain;
  errorMessage: string;

  genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
  ];

  constructor(private heroService: HeroService, private villainService: VillainService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
  }
  getHeroes(): void {
    this.heroService.get().then(heroes => this.heroes = heroes);
  }
  getVillains(): void {
    this.villainService.get().then(villains => this.villains = villains);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  onSelectVillain(villan: Villain): void {
    this.selectedVillain = villan;
  }
}
