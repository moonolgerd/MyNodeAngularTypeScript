import { Component, Input } from '@angular/core';
import { Villain } from './villain';
@Component({
  selector: 'my-villain-detail',
  template: 'app/villain-detail.component.html'
})
export class VillainDetailComponent {
  @Input()
  villain: Villain;
}
