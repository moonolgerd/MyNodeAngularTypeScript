import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Hero } from './hero';
import { IGenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService implements IGenericService<Hero> {

    private heroesUrl = 'http://localhost:5000/api/heroes';  // URL to web api

    constructor(private http: HttpClient) { }
    async get(): Promise<Hero[]> {
        return await this.http.get<Hero[]>(this.heroesUrl).toPromise();
    }

    async add(hero: Hero) {
        return await this.http.post<Hero>(this.heroesUrl, hero, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        }).toPromise();
    };

    edit(hero: Hero): Observable<Hero> {
        return this.http
        .put<Hero>(this.heroesUrl + '/' + hero.id, hero, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
        .catch(this.handleError);
    }

    delete(id: number): Observable<Hero> {
        const myString = `${this.heroesUrl}/${id.toString()}`;
        return this.http.delete<Hero>(myString)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}
