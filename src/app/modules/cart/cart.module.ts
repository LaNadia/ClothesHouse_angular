import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store';
import { cartEffects } from 'src/app/store/effects/cartEffects.effect';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('cart', reducers.cart),
    EffectsModule.forFeature([cartEffects])
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
