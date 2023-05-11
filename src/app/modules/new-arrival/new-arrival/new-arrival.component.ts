import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { GetNewArrivalAction } from 'src/app/store/actions/createActions.action';
import { newArrivalSelector, newArrivalIsSubmittingSelector } from 'src/app/store/selectors/newArrivalSelectors';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit{
  newArrivalList$!: Observable<any>;
  isSubmitting$!: Observable<any>;
  length: number = 0;


  constructor(private store: Store){}

  
  initializeValues(){
    this.store.dispatch(GetNewArrivalAction({length: this.length}));
    this.newArrivalList$ = this.store.pipe(select(newArrivalSelector));
    this.isSubmitting$ = this.store.pipe(select(newArrivalIsSubmittingSelector));
  };

  ngOnInit() {
    this.length = 6;
    console.log(this.length);
    this.initializeValues();
  };

  loadMore(){
    this.length += 6;
    const scrollTop = document.documentElement.clientHeight;
    window.scrollBy(0, -scrollTop)

    this.initializeValues();
  }
}
