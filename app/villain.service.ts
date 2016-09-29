import { Injectable } from '@angular/core';
import { Villain } from './villain';
@Injectable()
export class VillainService {
    constructor() { }
    getVillains(): Promise<Villain[]> {
        return Promise.resolve([
            { id: 11, name: 'Diablo', level: 100 },
            { id: 12, name: 'Shodan', level: 256 },
            { id: 13, name: 'Joker', level: 50 },
            { id: 666, name: 'Wild Hunt', level: 99999 }
        ]);
    }
}