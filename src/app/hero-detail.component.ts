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

    existing: boolean = this.hero != null;

    genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ];

    constructor(private heroService: HeroService) { }

    /**
     * Adds a hero
     * @param hero Hero
     */
    async addHero(hero: Hero) {
        const p = await this.heroService.add(hero)
        console.log(p);
    }

    deleteHero(id: number) {
        this.heroService.delete(id).subscribe(hero => {
            hero.deleted = true;
        });
    }

    editHero(hero: Hero) {
        this.heroService.edit(hero).subscribe(
            myHero => this.hero = myHero);
        //    error =>  this.errorMessage = <any>error);
    }
}
