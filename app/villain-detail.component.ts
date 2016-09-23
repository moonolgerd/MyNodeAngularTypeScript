import { Component, Input } from '@angular/core';
import { Villain } from './villain';
@Component({
  selector: 'my-villain-detail',
  template: `
    <div *ngIf="villain">
      <h2>{{villain.name}} details!</h2>
      <div><label>id: </label>{{villain.id}}</div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="villain.name" placeholder="name"/>
      </div>
      <div><label>Type: </label>{{villain.type}}</div>
    </div>
  `
})
export class VillainDetailComponent {
  @Input()
  villain: Villain;
}
