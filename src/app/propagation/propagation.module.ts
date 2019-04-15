import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropagationComponent } from './propagation.component';
import { PropagationSlotComponent } from './propagation-slot/propagation-slot.component';
import { SeedsComponent } from './seeds/seeds.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatBottomSheetModule } from '@angular/material';

@NgModule({
  declarations: [
    PropagationComponent,
    PropagationSlotComponent,
    SeedsComponent
  ],
  imports: [CommonModule, CdkTableModule, MatBottomSheetModule],
  exports: [PropagationComponent],
  entryComponents: [SeedsComponent]
})
export class PropagationModule {}
