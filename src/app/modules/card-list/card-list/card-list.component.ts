import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetNewArrivalAction } from 'src/app/store/actions/createActions.action';
import { newArrivalSelector, newArrivalIsSubmittingSelector } from 'src/app/store/selectors/newArrivalSelectors';

@Component({
  selector: 'app-card-list[data][isSubmitting]',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent{

  @Input('data') data!: Observable<any>;
  @Input('isSubmitting') isSubmitting!: Observable<any>;

}


