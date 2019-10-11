import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanatizerPipe } from './dom-sanatizer.pipe';



@NgModule({
  declarations: [DomSanatizerPipe],
  exports: [
    DomSanatizerPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
