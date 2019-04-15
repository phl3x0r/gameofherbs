import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/store';
import { selectSeeds } from '@grower';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Seeds } from 'shared/interfaces';

@Component({
  selector: 'app-seeds',
  templateUrl: './seeds.component.html',
  styleUrls: ['./seeds.component.scss']
})
export class SeedsComponent implements OnInit {
  seeds$: Observable<Seeds[]> = this.store.select(selectSeeds);
  displayedColumns = ['id', 'quality', 'count'];
  constructor(private store: Store<GameState>) {}

  ngOnInit() {}
}