import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-list[data][isSubmitting]',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent{

  @Input('data') data!: Observable<any>;
  @Input('isSubmitting') isSubmitting!: Observable<any>;

  constructor(){
    console.log(this.isSubmitting)
  }


}

