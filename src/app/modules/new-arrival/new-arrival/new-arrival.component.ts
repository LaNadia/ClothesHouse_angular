import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetNewArrivalAction } from 'src/app/store/actions/createActions.action';
import { newArrivalSelector, newArrivalIsSubmittingSelector } from 'src/app/store/selectors/newArrivalSelectors';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent {
  newArrivalList$!: Observable<any>;
  isSubmitting$!: Observable<any>;

  constructor(private store: Store){}

  ngOnInit() {
    this.store.dispatch(GetNewArrivalAction());
    this.newArrivalList$ = this.store.pipe(select(newArrivalSelector));
    this.isSubmitting$ = this.store.pipe(select(newArrivalIsSubmittingSelector));
  };
}
