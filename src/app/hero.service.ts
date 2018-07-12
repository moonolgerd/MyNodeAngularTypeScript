import { Injectable } from '@angular/core'
import { Hero } from './hero'
import { BaseService } from './generic.service'

@Injectable()
export class HeroService extends BaseService<Hero> {

    private heroesUrl = 'http://localhost:5000/api/heroes'  // URL to web api

    async get() {
        return this.http.get<Hero[]>(this.heroesUrl).toPromise()
    }

    add(hero: Hero) {
        return this.http.post<Hero>(this.heroesUrl, hero, {
            headers: this.headers
        }).toPromise()
            .catch(this.handleError)
    }

    edit(hero: Hero) {
        return this.http.put<Hero>(this.heroesUrl + '/' + hero.id, hero, {
            headers: this.headers
        }).toPromise()
            .catch(this.handleError)
    }

    delete(id: number) {
        const myString = `${this.heroesUrl}/${id.toString()}`
        return this.http.delete<Hero>(myString)
            .toPromise()
            .catch(this.handleError)
    }
}
