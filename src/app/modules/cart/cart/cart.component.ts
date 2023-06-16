import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map, tap } from 'rxjs';
import { cartIsSubmittingSelector, cartItemsSelector } from 'src/app/store/selectors/cartSelectors.selectors';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';
import { ChangeCartQuantityAction } from 'src/app/store/actions/createActions.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartItems$!: Observable<trendingClothesDataInterface[] | []>;
  cart!: trendingClothesDataInterface[];

  constructor(private store: Store){}

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(select(cartItemsSelector), tap((value) => this.cart = value));
  }


   plusItem = (id: number):void => {
    let item = this.cart.filter((item: { id: number; }) => item.id === id)[0];
      if(item.quantity){
            item.quantity = item.quantity + 1;
           this.store.dispatch(ChangeCartQuantityAction({items: this.cart}))
      };

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
