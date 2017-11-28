import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { IGenericService } from './generic.service';
import { Villain } from './villain';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class VillainService implements IGenericService<Villain> {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private villainsUrl = 'http://localhost:5000/api/villains';  // URL to web api

    private static handleError(error: any): Promise<Villain> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http: HttpClient) { }

    async get(): Promise<Villain[]> {
        return await this.http.get<Villain[]>(this.villainsUrl).toPromise();
    }

    delete(id: number) {
        const myString = `${this.villainsUrl}/${id.toString()}`;
        return this.http.delete<Villain>(myString).toPromise()
            .catch(VillainService.handleError);
    }
    edit(villain: Villain) {

        return this.http.put<Villain>(this.villainsUrl + '/' + villain.id, villain, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        }).toPromise()
            .catch(VillainService.handleError);
    }

    add(villain: Villain) {
        return this.http.put<Villain>(this.villainsUrl + '/' + villain.id, villain, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
        .toPromise()
        .catch(VillainService.handleError);
    }
}
