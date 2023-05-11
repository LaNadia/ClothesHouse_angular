import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  GetJournalStoryAction,
  GetRelatedStoriesAction,
} from 'src/app/store/actions/createActions.action';
import {
  journalStorySelector,
  journalStoryIsSubmittingSelector,
} from 'src/app/store/selectors/journalStorySelectors';
import { JournalStory } from '../types/journalStory.interface';
import {
  relatedStoriesIsSubmittingSelector,
  relatedStoriesSelector,
} from 'src/app/store/selectors/relatedStoriesSelectors';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss'],
})
export class JournalComponent implements OnInit {
  title!: string;

  currentStory$!: Observable<JournalStory[] | []>;
  isSubmittingCurrentStory$!: Observable<boolean>;
  relatedStories$!: Observable<any>;
  isSubmittingrelatedStories$!: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title')!;
    console.log(this.title);

    this.initializeCurrentStory();
    this.initializeRelatedStories();
    this.initislizeListeners();
  }

  initislizeListeners() {
    this.route.params.subscribe((params: Params) => {
      this.title = params['title'];
      if(this.title == 'In spring and summer winds may blow') return;
      this.initializeCurrentStory();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }

  initializeCurrentStory() {
    console.log('start')
    this.store.dispatch(GetJournalStoryAction({ title: this.title }));
    this.currentStory$ = this.store.pipe(select(journalStorySelector));
    this.isSubmittingCurrentStory$ = this.store.pipe(select(journalStoryIsSubmittingSelector)
    );
  }

  initializeRelatedStories() {
    this.store.dispatch(GetRelatedStoriesAction());
    this.relatedStories$ = this.store.pipe(select(relatedStoriesSelector));
    this.isSubmittingrelatedStories$ = this.store.pipe(select(relatedStoriesIsSubmittingSelector)
    );
  }

  refreshRelatedStories() {
    this.initializeRelatedStories();
  }
}
