import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetTrendingClothesAction } from 'src/app/store/actions/createActions.action';
import { trendingClothesDataInterface } from '../types/trendingClothesData.interface';
import { trendingClothesIsSubmittingSelector, trendingClothesSelector } from 'src/app/store/selectors/tredingClothesSelectors';
import { Observable } from 'rxjs';
import { addToCartUtil } from 'src/app/components/utils/add-to-cart-util/add-to-cart-util';


@Component({
  selector: 'app-trending-clothes',
  templateUrl: './trending-clothes.component.html',
  styleUrls: ['./trending-clothes.component.scss']
})
export class TrendingClothesComponent implements OnInit {

  trendingClothesList$!: Observable<any>;
  isSubmitting$!: Observable<any>;

  addNewItem(item: trendingClothesDataInterface){
    //   console.log(id)
       this.addToCart.addToCart(item);
     }

  constructor(private store: Store, private addToCart: addToCartUtil){}

  ngOnInit() {
    this.store.dispatch(GetTrendingClothesAction());
    this.trendingClothesList$ = this.store.pipe(select(trendingClothesSelector));
    this.isSubmitting$ = this.store.pipe(select(trendingClothesIsSubmittingSelector));
  };
}

