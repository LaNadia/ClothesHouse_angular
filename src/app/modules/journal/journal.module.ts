import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalComponent } from './journal/journal.component';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { GetJournalStory } from './services/journalStory.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '../../store/index'
import { journalStoryEffects } from 'src/app/store/effects/journalStoryEffects.effect';
import { relatedStoriesEffects } from 'src/app/store/effects/relatedStoriesEffects.effect';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: JournalComponent }
]

@NgModule({
  declarations: [
    JournalComponent
  ],
  imports: [
    CommonModule,
    FooterModule,
    RouterModule,
    StoreModule.forFeature('journalStory', reducers.journalStory),
    StoreModule.forFeature('relatedStories', reducers.relatedStories),
    EffectsModule.forFeature([journalStoryEffects, relatedStoriesEffects]),
    RouterModule.forChild(routes)
  ],
  exports: [
    JournalComponent
  ],
  providers:[
    GetJournalStory
  ]
})
export class JournalModule { }
