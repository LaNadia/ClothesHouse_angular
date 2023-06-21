import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { cartItemsSelector } from 'src/app/store/selectors/cartSelectors.selectors';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';
import { ChangeCartQuantityAction } from 'src/app/store/actions/createActions.action';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    cartItems$!: Observable<trendingClothesDataInterface[] | []>;
    cart!: trendingClothesDataInterface[];

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.cartItems$ = this.store.pipe(
            select(cartItemsSelector),
            tap((value) => (this.cart = value))
        );
    }

    changeQuantity = (id: number, action: string): void => {
        let array = JSON.parse(JSON.stringify(this.cart));
        let item: trendingClothesDataInterface = array.filter(
            (item: { id: number }) => item.id === id
        )[0];
        if (item.quantity) {
            item.quantity =
                action == 'plus' ? item.quantity + 1 : item.quantity - 1;
            if (item.quantity === 0) {
                this.deleteItem(item.id);
            } else {
                this.store.dispatch(ChangeCartQuantityAction({ items: array }));
            }
        }
    };

    deleteItem(id: number) {
        let array = [...this.cart];
        let itemsLeft = array.filter((item) => item.id !== id);

        this.store.dispatch(ChangeCartQuantityAction({ items: itemsLeft }));
    }
}
