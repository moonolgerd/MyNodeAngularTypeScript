import { Component, OnInit } from '@angular/core';
import { Villain } from 'app/villain';
import { VillainService } from 'app/villain.service';

@Component({
    selector: 'app-villains',
    templateUrl: './villains.component.html',
    styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {

    villains: Villain[]

    selectedVillain: Villain
    constructor(private villainService: VillainService) { }

    ngOnInit() {
        this.getVillains()
    }

    async getVillains() {
        this.villains = await this.villainService.get()
    }

    addVillain() {
        this.selectedVillain = <Villain>{
            name: 'New Villain'
        }
    }

    onSelectVillain(villan: Villain) {
        this.selectedVillain = villan
    }
}
