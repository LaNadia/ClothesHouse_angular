import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetJournalStoryAction } from 'src/app/store/actions/createActions.action';
import { journalStorySelector, journalStoryIsSubmittingSelector } from 'src/app/store/selectors/journalStorySelectors';
import { JournalStory } from '../types/journalStory.interface';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit{

  currentStory$!: Observable<JournalStory[] | []>;
  relatedStories$!: Observable<any>;
  isSubmitting$!: Observable<boolean>;

  constructor(private store: Store){}

  ngOnInit(){
    this.store.dispatch(GetJournalStoryAction());
    this.currentStory$ = this.store.pipe(select(journalStorySelector));

    console.log(this.store.pipe(select(journalStorySelector)))
    this.isSubmitting$ = this.store.pipe(select(journalStoryIsSubmittingSelector));
  }

  a(){
    console.log(this.isSubmitting$)
  }

}
