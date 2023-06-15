import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { cartIsSubmittingSelector, cartItemsSelector } from 'src/app/store/selectors/cartSelectors.selectors';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  items = true;
  cartItems$!: Observable<trendingClothesDataInterface[] | []>;

  constructor(private store: Store){}

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(select(cartItemsSelector), tap(console.log));
  }


   plusItem = (id: number):void => {
  //   let array = JSON.parse(JSON.stringify(items)); 
  //   let item2 = array.filter((item: { id: number; }) => item.id === id)[0];

  //   if(item2.quantity){
  //       item2.quantity = item2.quantity + 1;
  //     dispatch(getShoppingItems(array));
  //  };
}

 minusItem = (id: number):void => {
    // let array = JSON.parse(JSON.stringify(items)); 
    // let item2 = array.filter((item: { id: number; }) => item.id === id)[0];

    // if(item2.quantity !== 1){
    //     item2.quantity = item2.quantity - 1;
    //   dispatch(getShoppingItems(array));
    // } else {
    //     console.log()
    // }
}

}
