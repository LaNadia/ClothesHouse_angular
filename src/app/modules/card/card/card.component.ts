import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item: trendingClothesDataInterface | undefined;
  @Output() newItemEvent = new EventEmitter<trendingClothesDataInterface>();
  public addNewItem() {
    this.newItemEvent.emit(this.item);
  }
}
