import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PropagationChamber } from '@shared';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-propagation-chamber',
  templateUrl: './propagation-chamber.component.html',
  styleUrls: ['./propagation-chamber.component.scss']
})
export class PropagationChamberComponent {
  @Input() chamber: PropagationChamber;
}
