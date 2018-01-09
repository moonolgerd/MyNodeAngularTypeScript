import { HeroService } from './../hero.service'
import { Component, Input } from '@angular/core'
import { Hero } from './../hero'

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
    @Input()
    hero: Hero = new Hero

    existing: boolean = this.hero != null

    genders = [
        { value: 'F', display: 'Female' },
        { value: 'M', display: 'Male' }
    ]

    constructor(private heroService: HeroService) { }

    /**
     * Adds a hero
     * @param hero Hero
     */
    async addHero(hero: Hero) {
        const p = await this.heroService.add(hero)
        console.log(p)
    }

    async deleteHero(id: number) {
        const hero = await this.heroService.delete(id)
        hero.deleted = true
    }

    async editHero(hero: Hero) {
        this.hero = await this.heroService.edit(hero)
    }
}
