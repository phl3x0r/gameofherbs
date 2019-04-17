import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from '../store';
import { Observable } from 'rxjs';
import { Grower } from '@shared';
import { selectGrower } from '../store/ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  grower$: Observable<Grower> = this.store.select(selectGrower);
  @Output() logout = new EventEmitter<void>();

  constructor(private store: Store<GameState>) {}

  ngOnInit() {}
}
