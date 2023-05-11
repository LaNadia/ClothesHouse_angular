import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal/journal.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { GetJournalStory } from './services/journalStory.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../../store/index'
import { journalStoryEffects } from 'src/app/store/effects/journalStoryEffects.effect';



@NgModule({
  declarations: [
    JournalComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    StoreModule.forFeature('journalStory', reducers.journalStory),
    EffectsModule.forFeature([journalStoryEffects]),
  ],
  exports: [
    JournalComponent
  ],
  providers:[
    GetJournalStory
  ]
})
export class JournalModule { }
