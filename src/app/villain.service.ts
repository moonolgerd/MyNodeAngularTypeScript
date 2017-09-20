import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import { IGenericService } from './generic.service';
import { Villain } from './villain';

@Injectable()
export class VillainService implements IGenericService<Villain> {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private villainsUrl = 'http://localhost:5000/api/villains';  // URL to web api

    constructor(private http: Http) { }

    async get(): Promise<Villain[]> {
        const response = await this.http.get(this.villainsUrl).toPromise();
        return response.json() as Villain[];
    }

    delete(id: number): Observable<Villain> {
        // const options = new RequestOptions({ headers: this.headers, method:  RequestMethod.Delete});
        const myString = `${this.villainsUrl}/${id.toString()}`;
        return this.http.delete(myString)
            .map((r: Response) => r.json())
            .catch(this.handleError);
    }
    edit(villain: Villain): Observable<Villain> {
        const options = new RequestOptions({ headers: this.headers });

        return this.http.put(this.villainsUrl + '/' + villain.id, villain, options)
            .map((r: Response) => r.json())
            .catch(this.handleError);
    }

    add(villain: Villain): Promise<Villain> {
        const options = new RequestOptions({ headers: this.headers });
        return this.http.put(this.villainsUrl + '/' + villain.id, villain, options)
        .toPromise()
        .then((r: Response) => r.json())
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
