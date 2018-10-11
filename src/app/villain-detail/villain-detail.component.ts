import { Component, Input } from '@angular/core'
import { Villain } from './../villain'
import { VillainService } from './../villain.service'

@Component({
    selector: 'app-villain-detail',
    templateUrl: './villain-detail.component.html'
})
export class VillainDetailComponent {
    @Input()
    villain: Villain
    roles: string[] = ['demigod', 'lessergod']

    constructor(private villainService: VillainService) { }

    async addVillain(villain: Villain) {
        await this.villainService.add(villain)
    }

    async deleteVillain(id: number) {
        const villain = await this.villainService.delete(id)
    }

    async editVillain(villain: Villain) {
        this.villain = await this.villainService.edit(villain)
    }
}
