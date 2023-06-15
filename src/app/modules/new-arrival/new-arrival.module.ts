import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArrivalComponent } from './new-arrival/new-arrival.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CheckUsModule } from '../check-us/check-us.module';
import { CardListModule } from '../card-list/card-list.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store';
import { EffectsModule } from '@ngrx/effects';
import { newArrivalEffects } from 'src/app/store/effects/newArrival.Effects.effects';
import { getNewArrivalClothes } from './services/newArrivalService.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NewArrivalComponent }
]

@NgModule({
  declarations: [
    NewArrivalComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    CheckUsModule,
    CardListModule,
    StoreModule.forFeature('newArrival', reducers.newArrival),
    EffectsModule.forFeature([newArrivalEffects]),
    RouterModule.forChild(routes)
  ],
  providers:[
    getNewArrivalClothes
  ],
  exports: [
    NewArrivalComponent
  ]
})
export class NewArrivalModule { }
