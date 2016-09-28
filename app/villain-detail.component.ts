import { Component, Input } from '@angular/core';
import { Villain } from './villain';
@Component({
  selector: 'my-villain-detail',
  template: `
    <div *ngIf="villain">
      <h2>{{villainhero.name}} details!</h2>
      <div><label>id: </label>{{villain.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="villain.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class VillainDetailComponent {
  @Input()
  villain: Villain;
}
