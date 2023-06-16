import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';

@Component({
  selector: 'app-card-list[data][isSubmitting]',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent{
  @Input('data') data!: Observable<any>;
  @Input('isSubmitting') isSubmitting!: Observable<any>;
  @Output() newItemEvent = new EventEmitter<trendingClothesDataInterface>();
  public addNewItem(item: trendingClothesDataInterface) {
    this.newItemEvent.emit(item);
  }
}
