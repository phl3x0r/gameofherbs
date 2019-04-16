import { BuyDialogComponent } from './buy-dialog';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [MatDialogModule],
  declarations: [BuyDialogComponent],
  entryComponents: [BuyDialogComponent]
})
export class DialogModule {}
