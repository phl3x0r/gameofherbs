import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FireBaseService } from '../../../services/firebase.service';
import { ProductBuyOrder, Product } from 'shared/interfaces';
import { ProductPriceList } from 'shared';

@Component({
  selector: 'app-buy-dialog',
  templateUrl: 'buy-dialog.component.html'
})
export class BuyDialogComponent {
  productInfo: Product;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductBuyOrder,
    private dialogRef: MatDialogRef<BuyDialogComponent>,
    private fb: FireBaseService
  ) {
    console.log(data);
    this.productInfo = ProductPriceList[data.product.id];
  }

  ok() {
    this.fb.buyProduct(this.data).subscribe(() => this.dialogRef.close());
  }
}
