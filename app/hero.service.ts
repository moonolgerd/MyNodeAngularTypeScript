import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
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

    editHero(hero: Hero): Observable<Hero> {
        const options = new RequestOptions({ headers: this.headers });

        return this.http.put(this.heroesUrl + "/" + hero.id, hero, options)
            .map((r:Response) => r.json())
            .catch(this.handleError);
    }

    deleteHero(id: number): Observable<Hero> {
        //const options = new RequestOptions({ headers: this.headers, method:  RequestMethod.Delete});
        var myString = `${this.heroesUrl}/${id.toString()}`;
        return this.http.delete(myString)
            .map((r:Response) => r.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}