import { Injectable } from '@angular/core'

import 'rxjs/add/operator/toPromise'
import { Villain } from './villain'
import { BaseService } from './hero.service';

@Injectable()
export class VillainService extends BaseService<Villain> {

    private villainsUrl = 'http://localhost:5000/api/villains'  // URL to web api

    private static handleError(error: any): Promise<Villain> {
        console.error('An error occurred', error) // for demo purposes only
        return Promise.reject(error.message || error)
    }

    async get(): Promise<Villain[]> {
        return await this.http.get<Villain[]>(this.villainsUrl).toPromise()
    }

    delete(id: number) {
        const myString = `${this.villainsUrl}/${id.toString()}`
        return this.http.delete<Villain>(myString).toPromise()
            .catch(VillainService.handleError)
    }
    edit(villain: Villain) {
        return this.http.put<Villain>(this.villainsUrl + '/' + villain.id, villain, {
            headers: this.headers
        }).toPromise()
            .catch(VillainService.handleError)
    }

    add(villain: Villain) {
        return this.http.put<Villain>(this.villainsUrl + '/' + villain.id, villain, {
            headers: this.headers
        })
            .toPromise()
            .catch(VillainService.handleError)
    }
}
