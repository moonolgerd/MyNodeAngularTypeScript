import { Injectable } from '@angular/core'
import { Villain } from './villain'
import { BaseService } from './generic.service'

@Injectable()
export class VillainService extends BaseService<Villain> {

    private villainsUrl = 'http://localhost:5000/api/villains'  // URL to web api

    async get(): Promise<Villain[]> {
        return await this.http.get<Villain[]>(this.villainsUrl).toPromise()
    }

    delete(id: number) {
        const myString = `${this.villainsUrl}/${id.toString()}`
        return this.http.delete<Villain>(myString).toPromise()
            .catch(this.handleError)
    }
    edit(villain: Villain) {
        return this.http.put<Villain>(this.villainsUrl + '/' + villain.id, villain, {
            headers: this.headers
        }).toPromise()
            .catch(this.handleError)
    }

    add(villain: Villain) {
        return this.http.put<Villain>(this.villainsUrl + '/' + villain.id, villain, {
            headers: this.headers
        })
            .toPromise()
            .catch(this.handleError)
    }
}
