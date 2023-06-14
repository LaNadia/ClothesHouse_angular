import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatElementDirective } from './float-element.directive';



@NgModule({
  declarations: [FloatElementDirective],
  imports: [CommonModule],
  exports: [FloatElementDirective]
})
export class FloatElementModule { }
