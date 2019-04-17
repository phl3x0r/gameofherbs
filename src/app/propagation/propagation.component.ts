import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropagationChamber, ProductTypes, ProductBuyOrder } from '@shared';
import { Observable } from 'rxjs';
import { GameState } from '../store';
import { map, take } from 'rxjs/operators';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { SeedsComponent } from './seeds/seeds.component';
import { BuyDialogComponent } from '../shared';
import { selectProduct as selectProducts } from '@grower';

@Component({
  selector: 'app-propagation',
  templateUrl: './propagation.component.html',
  styleUrls: ['./propagation.component.scss']
})
export class PropagationComponent implements OnInit {
  propagationChambers$: Observable<PropagationChamber[]> = this.store
    .select(
      selectProducts<PropagationChamber>(ProductTypes.PROPAGATION_CHAMBER)
    )
    .pipe(map(p => p));

  constructor(
    private store: Store<GameState>,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  openSeedsModal() {
    this.bottomSheet.open(SeedsComponent);
  }

  buyChamber() {
    const dialogRef = this.dialog.open(BuyDialogComponent, {
      width: '250px',
      data: <ProductBuyOrder>{
        productType: ProductTypes.PROPAGATION_CHAMBER
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
