import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Villain } from './villain';

@Injectable()
export class VillainService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private villainsUrl = 'http://localhost:5000/api/villains';  // URL to web api

    constructor(private http: Http) { }
    
    getVillains(): Promise<Villain[]> {
        return this.http.get(this.villainsUrl)
            .toPromise()
            .then(response => response.json() as Villain[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}