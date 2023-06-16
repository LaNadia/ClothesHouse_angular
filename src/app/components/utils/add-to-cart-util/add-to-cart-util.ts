import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { trendingClothesDataInterface } from 'src/app/modules/trending-clothes/types/trendingClothesData.interface';
import { AddToCartAction } from 'src/app/store/actions/createActions.action';
import { cartItemsSelector } from 'src/app/store/selectors/cartSelectors.selectors';

@Injectable()
export class addToCartUtil {
    constructor(private readonly store: Store) {}
    currentCartListSubscription!: Subscription;
    currentCartList: trendingClothesDataInterface[] = [];

    updatedCartList: trendingClothesDataInterface[] = [];

    addToCart(itemInput: trendingClothesDataInterface) {
        this.currentCartListSubscription = this.store
            .pipe(select(cartItemsSelector))
            .subscribe((value) => (this.currentCartList = value));

        let item = this.currentCartList.filter(
            (item) => item.id === itemInput.id
        );

        if (!item.length) {
            //if we dont have item in the cart already, so we add it for the 1st time
            let newInputItem = Object.assign({ quantity: 1 }, itemInput);
            this.updatedCartList = [];
            this.updatedCartList = [...this.currentCartList];
            this.updatedCartList.push(newInputItem);
            this.store.dispatch(
                AddToCartAction({ items: this.updatedCartList })
            );
        }

        if (item.length) {
            //when we already have this item in the cart, so we just change quantity
            let item2 = this.currentCartList.filter(
                (item) => item.id === itemInput.id
            )[0];
            let item3 = JSON.parse(JSON.stringify(item2));

            item3.quantity = item3.quantity! + 1;

            this.updatedCartList = [];
            this.updatedCartList = [...this.currentCartList];
            console.log(item3);
            let index = this.updatedCartList.findIndex((e) => e.id == item3.id); //index
            this.updatedCartList.splice(index, 1, item3);
            this.store.dispatch(
                AddToCartAction({ items: this.updatedCartList })
            );
        }

        this.currentCartListSubscription.unsubscribe();
    }
}
