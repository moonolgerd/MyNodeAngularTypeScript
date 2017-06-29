import { Component, Input } from '@angular/core';
import { Villain } from './villain';
@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html'
})
export class VillainDetailComponent {
  @Input()
  villain: Villain;
}
