import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'

import { Hero } from './hero'
import { IGenericService } from './generic.service'
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Injectable()
export class HeroService implements IGenericService<Hero> {

    private heroesUrl = 'http://localhost:5000/api/heroes'  // URL to web api

    constructor(private http: HttpClient) { }
    get() {
        return this.http.get<Hero[]>(this.heroesUrl).toPromise()
    }

    add(hero: Hero) {
        return this.http.post<Hero>(this.heroesUrl, hero, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        }).toPromise()
    }

    edit(hero: Hero) {
        return this.http.put<Hero>(this.heroesUrl + '/' + hero.id, hero, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        }).toPromise()
    }

    delete(id: number) {
        const myString = `${this.heroesUrl}/${id.toString()}`
        return this.http.delete<Hero>(myString)
            .toPromise()
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error)
    }
}
