import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingClothesComponent } from './trending-clothes/trending-clothes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { trendingClothesEffects } from 'src/app/store/effects/trendingClothesEffects.effects';
import { RouterModule, Routes } from '@angular/router';
import { reducers } from '../../store/index'
import { HttpClientModule } from '@angular/common/http';
import { GetTrendingClothes } from './services/getTrendingClothes.service';
import { CardListComponent } from '../card-list/card-list.component';



@NgModule({
  declarations: [
    TrendingClothesComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('trendingClothes', reducers.trendingClothes),
    EffectsModule.forFeature([trendingClothesEffects])
  ],
  exports: [
    TrendingClothesComponent,
    CardListComponent
  ],
  providers: [
    GetTrendingClothes
  ]
})
export class TrendingClothesModule { }
