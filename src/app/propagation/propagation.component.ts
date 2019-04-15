import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropagationSlot } from 'shared/interfaces';
import { selectPropagation } from '../store/grower';
import { Observable } from 'rxjs';
import { GameState } from '../store';
import { map, filter } from 'rxjs/operators';
import { MatBottomSheet } from '@angular/material';
import { SeedsComponent } from './seeds/seeds.component';

@Component({
  selector: 'app-propagation',
  templateUrl: './propagation.component.html',
  styleUrls: ['./propagation.component.scss']
})
export class PropagationComponent implements OnInit {
  propagationSlots$: Observable<PropagationSlot[]> = this.store
    .select(selectPropagation)
    .pipe(map(p => p && p.slots));

  constructor(
    private store: Store<GameState>,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {}

  openSeedsModal() {
    this.bottomSheet.open(SeedsComponent);
  }
}
