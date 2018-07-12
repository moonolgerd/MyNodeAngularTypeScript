import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'

import { Hero } from './hero'
import { IGenericService } from './generic.service'
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

export abstract class BaseService<T> implements IGenericService<T> {

    protected http: HttpClient
    protected headers = new HttpHeaders().set('Content-Type', 'application/json')

    abstract add(arg: T): Promise<T>
    abstract get(): Promise<T[]>
    abstract edit(arg: T): Promise<T>
    abstract delete(id: number): Promise<T>
}

@Injectable()
export class HeroService extends BaseService<Hero> {

    private heroesUrl = 'http://localhost:5000/api/heroes'  // URL to web api

    get() {
        return this.http.get<Hero[]>(this.heroesUrl).toPromise()
    }

    add(hero: Hero) {
        return this.http.post<Hero>(this.heroesUrl, hero, {
            headers: this.headers
        }).toPromise()
    }

    edit(hero: Hero) {
        return this.http.put<Hero>(this.heroesUrl + '/' + hero.id, hero, {
            headers: this.headers
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
