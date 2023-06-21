import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingClothesComponent } from './trending-clothes/trending-clothes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { trendingClothesEffects } from 'src/app/store/effects/trendingClothesEffects.effects';
import { reducers } from '../../store/index'
import { HttpClientModule } from '@angular/common/http';
import { GetTrendingClothes } from './services/getTrendingClothes.service';
import { CardListComponent } from '../card-list/card-list/card-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CheckUsModule } from '../check-us/check-us.module';
import { CardListModule } from '../card-list/card-list.module';
import { RouterModule, Routes } from '@angular/router';
import { addToCartUtil } from 'src/app/components/utils/add-to-cart-util/add-to-cart-util';

const routes: Routes = [
  { path: '', component: TrendingClothesComponent }
]

@NgModule({
  declarations: [
    TrendingClothesComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('trendingClothes', reducers.trendingClothes),
    EffectsModule.forFeature([trendingClothesEffects]),
    FooterModule,
    CheckUsModule,
    CardListModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TrendingClothesComponent,
    CardListComponent
  ],
  providers: [
    GetTrendingClothes,
    addToCartUtil
  ]
})
export class TrendingClothesModule { }
