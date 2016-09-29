import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {

    constructor() { }
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve([
            { id: 11, name: 'Mr. Nice', age: 24 },
            { id: 12, name: 'Narco', age: 50 },
            { id: 13, name: 'Bombasto', age: 16 },
            { id: 14, name: 'Celeritas', age: 35 },
            { id: 15, name: 'Magneta', age: 15 },
            { id: 16, name: 'RubberMan', age: 10 },
            { id: 17, name: 'Dynama', age: 88 },
            { id: 18, name: 'Dr IQ', age: 666 },
            { id: 19, name: 'Magma', age: 65 },
            { id: 20, name: 'Tornado', age: 76 }
        ]);
    }
}