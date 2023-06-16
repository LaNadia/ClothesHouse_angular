import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';
import { addToCartUtil } from 'src/app/components/utils/add-to-cart-util/add-to-cart-util';
import { GetNewArrivalAction } from 'src/app/store/actions/createActions.action';
import { newArrivalSelector, newArrivalIsSubmittingSelector } from 'src/app/store/selectors/newArrivalSelectors';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './new-arrival.component.html',
  styleUrls: ['./new-arrival.component.scss']
})
export class NewArrivalComponent implements OnInit{
  newArrivalList$!: Observable<any>;
  isSubmitting$!: Observable<any>;
  length: number = 0;

  addNewItem(item: trendingClothesDataInterface){
 //   console.log(id)
    this.addToCart.addToCart(item);
  }


  constructor(private store: Store, private addToCart: addToCartUtil){}

  
  initializeValues(){
    this.store.dispatch(GetNewArrivalAction({length: this.length}));
    this.isSubmitting$ = this.store.pipe(select(newArrivalIsSubmittingSelector));
    this.newArrivalList$ = this.store.pipe(select(newArrivalSelector));
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
