import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CheckoutComponent }
]

@NgModule({
    declarations: [CheckoutComponent],
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    exports: [CheckoutComponent],
})
export class CheckoutModule {}
