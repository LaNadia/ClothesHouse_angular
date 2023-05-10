import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterService } from './services/footer-service.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [FooterService],
  exports: [FooterComponent]
})
export class FooterModule { }
