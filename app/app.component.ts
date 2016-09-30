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
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}} is {{hero.age}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    <ul class="villains">
      <li *ngFor="let villain of villains">
        <span class="badge">{{villain.id}}</span> {{villain.name}} is {{villain.level}}
      </li>
    </ul>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .villains {
      margin: 0 50 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
  `]
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
