import { Component, Input } from '@angular/core';
import { Villain } from './villain';
@Component({
  selector: 'my-villain-detail',
  templateUrl: 'app/villain-detail.component.html'
})
export class VillainDetailComponent {
  @Input()
  villain: Villain;
}
