import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WardComponent } from './ward.component';

@NgModule({
  declarations: [WardComponent],
  imports: [
    CommonModule
  ],
  exports: [WardComponent]
})
export class WardModule { }
