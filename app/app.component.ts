import { Component } from '@angular/core';
import { Hero } from './hero';
import { Villain, VillainType } from './villain';
const HEROES: Hero[] = [
    { id: 1, name: 'Mr. Nice', age: 24 },
    { id: 2, name: 'Narco', age: 50 },
    { id: 3, name: 'Bombasto', age: 16 },
    { id: 4, name: 'Celeritas', age: 35 },
    { id: 5, name: 'Magneta', age: 15 },
    { id: 6, name: 'RubberMan', age: 10 },
    { id: 7, name: 'Dynama', age: 88 },
    { id: 8, name: 'Dr IQ', age: 666 },
    { id: 9, name: 'Magma', age: 65 },
    { id: 10, name: 'Tornado', age: 76 }
];
const Villains: Villain[] = [
    { id: 13, name: 'Diablo', type: VillainType.Warlock },
    { id: 666, name: 'OldCrow', type: VillainType.DarkNight }
];
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
    <h2>Villains</h2>
    <ul class="villains">
       <li *ngFor="let villain of villains">
        <span class="badge">{{villain.id}}</span> {{villain.name}} is {{villain.type}}
      </li>
    </ul>
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .villains {

    },
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
  `]
})
export class AppComponent {
    title = 'Not exactly my cup of tea';
    heroes = HEROES;
    villains = Villains;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
