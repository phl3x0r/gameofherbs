import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  exports: [HomeComponent]
})
export class HomeModule {}
