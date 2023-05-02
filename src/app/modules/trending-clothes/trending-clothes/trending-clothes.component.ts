import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetTrendingClothesAction } from 'src/app/store/actions/createActions.action';
import { GetTrendingClothes } from '../services/getTrendingClothes.service';


@Component({
  selector: 'app-trending-clothes',
  templateUrl: './trending-clothes.component.html',
  styleUrls: ['./trending-clothes.component.scss']
})
export class TrendingClothesComponent implements OnInit {

  constructor(private store: Store, private api: GetTrendingClothes){}



  ngOnInit() {
  //  this.store.dispatch(GetTrendingClothesAction());


  this.api.getTrendingClothes().subscribe((res: any) => {
    console.log( res);

  });


  };






}
