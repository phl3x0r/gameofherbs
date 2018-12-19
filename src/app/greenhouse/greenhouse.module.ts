import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenhouseComponent } from './greenhouse.component';

@NgModule({
  declarations: [GreenhouseComponent],
  imports: [
    CommonModule
  ],
  exports: [GreenhouseComponent]
})
export class GreenhouseModule { }
