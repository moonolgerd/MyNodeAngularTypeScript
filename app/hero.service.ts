import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import { Hero } from './hero';

@Injectable()
export class HeroService {

    private headers = new Headers(
        { 'Content-Type': 'application/json' });
        //'Access-Control-Allow-Origin' : '*'});
    private heroesUrl = 'http://localhost:5000/api/heroes';  // URL to web api

    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }

    addHero(hero: Hero): Observable<Hero> {
        const options = new RequestOptions({ headers: this.headers });

        return this.http.post(this.heroesUrl, hero, options)
            .map((r:Response) => r.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}