import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropagationComponent } from './propagation.component';
import { PropagationChamberComponent } from './propagation-chamber/propagation-chamber.component';
import { SeedsComponent } from './seeds/seeds.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatBottomSheetModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    PropagationComponent,
    PropagationChamberComponent,
    SeedsComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    MatBottomSheetModule,
    MatDialogModule
  ],
  exports: [PropagationComponent],
  entryComponents: [SeedsComponent]
})
export class PropagationModule {}
