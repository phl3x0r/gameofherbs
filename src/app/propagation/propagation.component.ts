import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  PropagationChamber,
  ProductTypes,
  ProductBuyOrder
} from 'shared/interfaces';
import { selectPropagation } from '../store/grower';
import { Observable } from 'rxjs';
import { GameState } from '../store';
import { map, take } from 'rxjs/operators';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { SeedsComponent } from './seeds/seeds.component';
import { BuyDialogComponent } from '../shared';
import { ProductPriceList } from 'shared';

@Component({
  selector: 'app-propagation',
  templateUrl: './propagation.component.html',
  styleUrls: ['./propagation.component.scss']
})
export class PropagationComponent implements OnInit {
  propagationChambers$: Observable<PropagationChamber[]> = this.store
    .select(selectPropagation)
    .pipe(map(p => p && p.chambers));

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
        product: ProductPriceList[ProductTypes.PROPAGATION_CHAMBER]
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
