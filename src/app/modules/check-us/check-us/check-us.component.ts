import { Component, OnInit } from '@angular/core';
import { CheckUsService } from '../services/check-us.service';
import { CheckUsProduct } from '../types/checkUsProducts.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-us',
  templateUrl: './check-us.component.html',
  styleUrls: ['./check-us.component.scss']
})
export class CheckUsComponent implements OnInit{

  constructor( private api: CheckUsService){}

  productList$!: Observable<CheckUsProduct[]>;

  ngOnInit(): void {
    this.productList$ = this.api.getCheckUsPics();
//      this.api.getCheckUsPics().subscribe((response: any) => {
//       this.productList$ = response
//  });
  };


}
