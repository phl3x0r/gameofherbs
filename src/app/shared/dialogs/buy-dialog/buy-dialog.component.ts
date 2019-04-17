import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProductBuyOrder } from '@shared';
import { getProductInfo, ProductInfo } from '@shared';
import { Store } from '@ngrx/store';
import { GameState } from 'src/app/store';
import { BuyProduct } from '@grower';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: 'buy-dialog.component.html'
})
export class BuyDialogComponent {
  productInfo: ProductInfo;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductBuyOrder,
    private dialogRef: MatDialogRef<BuyDialogComponent>,
    private store: Store<GameState>
  ) {
    console.log(data);
    this.productInfo = getProductInfo(data.productType);
  }

  ok() {
    this.store.dispatch(new BuyProduct({ productType: this.data.productType }));
    this.dialogRef.close();
    // this.fb.buyProduct(this.data).subscribe(() => this.dialogRef.close());
  }
}
