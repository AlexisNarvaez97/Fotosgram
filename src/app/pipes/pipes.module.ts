import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanatizerPipe } from './dom-sanatizer.pipe';
import { ImagenPipe } from './imagen.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';



@NgModule({
  declarations: [DomSanatizerPipe, ImagenPipe, ImageSanitizerPipe],
  exports: [
    DomSanatizerPipe,
    ImagenPipe,
    ImageSanitizerPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
