import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: [`/app/hero-detail.component.css`]
})
export class HeroDetailComponent {

  constructor(private heroService: HeroService) { }

  @Input()
  hero: Hero;

deleteHero(id: number) {
  this.heroService.deleteHero(id).subscribe(hero =>
  {
    hero.deleted = true;
  });
}

  editHero(hero: Hero) {
    this.heroService.editHero(hero).subscribe(
      hero => this.hero = hero);
    //    error =>  this.errorMessage = <any>error);
  }
}
