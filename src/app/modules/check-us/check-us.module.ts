import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckUsComponent } from './check-us/check-us.component';
import { CheckUsService } from './services/check-us.service';


@NgModule({
  declarations: [
    CheckUsComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    CheckUsService
  ],
  exports: [
    CheckUsComponent
  ]
})
export class CheckUsModule { }
