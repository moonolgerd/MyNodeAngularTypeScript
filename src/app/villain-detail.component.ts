import { Component, Input } from '@angular/core';
import { Villain } from './villain';
import { VillainService } from './villain.service';
@Component({
    selector: 'app-villain-detail',
    templateUrl: './villain-detail.component.html'
})
export class VillainDetailComponent {
    @Input()
    villain: Villain;
    roles: string[] = ['demigod', 'lessergod'];

    constructor(private villainService: VillainService) { }

    addVillain(): void {
    }

    deleteVillain(id: number) {
        this.villainService.delete(id).subscribe(villain => {

        });
    }

    editVillain(villain: Villain) {
        this.villainService.edit(villain).subscribe(
            myVillain => this.villain = myVillain);
        //    error =>  this.errorMessage = <any>error);
    }
}
