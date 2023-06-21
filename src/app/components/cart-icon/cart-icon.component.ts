import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { trendingClothesDataInterface } from 'src/app/modules/trending-clothes/types/trendingClothesData.interface';
import { cartItemsSelector } from 'src/app/store/selectors/cartSelectors.selectors';

@Component({
    selector: 'app-cart-icon',
    templateUrl: './cart-icon.component.html',
    styleUrls: ['./cart-icon.component.scss'],
})
export class CartIconComponent implements OnInit {
    numberOfItems$: Observable<number> | undefined;

    constructor(private readonly store: Store) {}

    ngOnInit(): void {
        this.numberOfItems$ = this.store.pipe(
            select(cartItemsSelector),
            map((value: trendingClothesDataInterface[] | []) => {
                return (value as any[]).reduce(function (
                    prev: number,
                    item: trendingClothesDataInterface
                ) {
                    if (item.quantity) {
                        return prev + item.quantity;
                    } else return 0;
                },
                0);
            })
        );
    }
}
