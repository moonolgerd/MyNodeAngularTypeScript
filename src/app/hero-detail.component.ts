import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [`./hero-detail.component.css`]
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
  constructor(private heroService: HeroService) { }

  deleteHero(id: number) {
    this.heroService.deleteHero(id).subscribe(hero => {
      hero.deleted = true;
    });
  }

  editHero(hero: Hero) {
    this.heroService.editHero(hero).subscribe(
      myHero => this.hero = myHero);
    //    error =>  this.errorMessage = <any>error);
  }
}
