import { checkoutService } from './../services/checkoutService.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { cartItemsSelector } from 'src/app/store/selectors/cartSelectors.selectors';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';
import { displayNameSelector, emailSelector } from 'src/app/store/selectors/userSelectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { orderDataType } from '../types/orderDataType.types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['../../cart/cart/cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutComponent implements OnInit{
  cartItems$!: Observable<trendingClothesDataInterface[]>;
  cart!: trendingClothesDataInterface[];
  name$!: Observable<string | null>;
  email$!: Observable<string | null>;
  success: boolean = false;
  error: boolean = false;
  isSubmitting: boolean = false;
  @ViewChild('ribbon', {read: ElementRef}) ribbon! : ElementRef;
  
  constructor(private store: Store, private cd: ChangeDetectorRef, private fb: FormBuilder, private checkoutService: checkoutService) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(select(cartItemsSelector), tap((value) => (this.cart = value)));
    this.name$ = this.store.pipe(select(displayNameSelector), tap((value) => this.orderData.controls['name'].setValue(value!)));
    this.email$ = this.store.pipe(select(emailSelector), tap((value) => this.orderData.controls['email'].setValue(value!)));
  }

    number(number: string){
      return Number(number)
    }

    get totalPrice(){
      return this.cart.reduce(function (previousValue, item) {               
        if(item.quantity){
       return previousValue + (Number(item.price) * item.quantity)
        } else return 0;
      }, 0).toFixed(2);
    }

    onArrowClick(){
      console.log(this.ribbon.nativeElement.offsetWidth)
      this.ribbon.nativeElement.scrollLeft += ((this.ribbon.nativeElement.offsetWidth / this.cart.length) * 2);
    }

    orderData: FormGroup<orderDataType> = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    })

    async onSubmit(e: Event) {
      e.preventDefault();
      this.isSubmitting = true;
      this.checkoutService.checkoutPost(this.orderData).then((res: any)=> {
        console.log(res, '23322332');
        this.isSubmitting = false;
        res == '200' ? this.showModalOK() : this.showModalError()
      })
      };

      showModalOK(){
        this.success = true;
        this.cd.markForCheck()
      }
      showModalError(){
        this.error = true;
        this.cd.markForCheck()
      }
      closeModal(){
        this.success = false;
        this.error = false;
        this.cd.markForCheck()
      }
}





