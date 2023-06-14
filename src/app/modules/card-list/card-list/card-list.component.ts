import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AddToCartAction, GetNewArrivalAction } from 'src/app/store/actions/createActions.action';
import { newArrivalSelector, newArrivalIsSubmittingSelector } from 'src/app/store/selectors/newArrivalSelectors';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';

@Component({
  selector: 'app-card-list[data][isSubmitting]',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit, OnDestroy{

  @Input('data') data!: Observable<any>;
  @Input('isSubmitting') isSubmitting!: Observable<any>;
  newArrivalList$!: Subscription;
  list!: trendingClothesDataInterface[];
  
  constructor(private store: Store){}

  ngOnInit(): void {
    this.newArrivalList$ = this.store.pipe(select(newArrivalSelector)).subscribe((value: any) =>
    this.list = value)
  };

  ngOnDestroy(): void {
    this.newArrivalList$.unsubscribe();
  }

  addItem(id: number){
    const item = this.list.filter(item => item.id === id);
    console.log(typeof item)
    this.store.dispatch(AddToCartAction({items: item}))
  }





}


