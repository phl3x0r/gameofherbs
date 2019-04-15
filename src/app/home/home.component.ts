import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from '../store';
import { Observable } from 'rxjs';
import { Grower } from 'shared/interfaces';
import { selectGrower } from '../store/ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  grower$: Observable<Grower> = this.store.select(selectGrower);

  constructor(private store: Store<GameState>) {}

  ngOnInit() {}
}
