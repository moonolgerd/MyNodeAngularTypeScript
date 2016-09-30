import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent {

  constructor(private heroService: HeroService) { }

  @Input()
  hero: Hero;


  addHero(hero: Hero) {
    this.heroService.addHero(hero).subscribe(
      hero => this.hero = hero);
    //    error =>  this.errorMessage = <any>error);
  }
}
