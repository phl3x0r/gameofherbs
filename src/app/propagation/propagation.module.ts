import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropagationComponent } from './propagation.component';

@NgModule({
  declarations: [PropagationComponent],
  imports: [
    CommonModule
  ],
  exports: [PropagationComponent]
})
export class PropagationModule { }
