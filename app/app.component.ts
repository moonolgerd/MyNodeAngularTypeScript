import { Component } from '@angular/core';
import { Hero } from './hero';
import { Villain } from './villain';
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', age: 24 },
  { id: 12, name: 'Narco', age: 50 },
  { id: 13, name: 'Bombasto', age: 16 },
  { id: 14, name: 'Celeritas', age: 35 },
  { id: 15, name: 'Magneta', age: 15 },
  { id: 16, name: 'RubberMan', age: 10 },
  { id: 17, name: 'Dynama', age: 88 },
  { id: 18, name: 'Dr IQ', age : 666 },
  { id: 19, name: 'Magma', age: 65 },
  { id: 20, name: 'Tornado', age: 76 }
];
const VILLAINS: Villain[] = [
  { id: 11, name: 'Diablo', level: 100 },
  { id: 12, name: 'Shodan', level: 256 },
  { id: 13, name: 'Joker', level: 50 }
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
export class AppComponent {
  title = 'My Heroic Quest';
  heroes = HEROES;
  villains = VILLAINS;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
