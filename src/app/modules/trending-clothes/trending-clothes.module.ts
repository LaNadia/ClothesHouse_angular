import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingClothesComponent } from './trending-clothes/trending-clothes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { trendingClothesEffects } from 'src/app/store/effects/trendingClothesEffects.effects';
import { reducers } from '../../store/index'
import { HttpClientModule } from '@angular/common/http';
import { GetTrendingClothes } from './services/getTrendingClothes.service';
import { CardListComponent } from '../card-list/card-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CheckUsModule } from '../check-us/check-us.module';



@NgModule({
  declarations: [
    TrendingClothesComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('trendingClothes', reducers.trendingClothes),
    EffectsModule.forFeature([trendingClothesEffects]),
    FooterModule,
    CheckUsModule
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
