import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-propagation-slot',
  templateUrl: './propagation-slot.component.html',
  styleUrls: ['./propagation-slot.component.scss']
})
export class PropagationSlotComponent {}
