import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { cartItemsSelector } from 'src/app/store/selectors/cartSelectors.selectors';
import { trendingClothesDataInterface } from '../../trending-clothes/types/trendingClothesData.interface';
import { displayNameSelector, emailSelector } from 'src/app/store/selectors/userSelectors';
import { FormBuilder, Validators } from '@angular/forms';

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
  
  constructor(private store: Store, private cd: ChangeDetectorRef, private fb: FormBuilder) {}

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

    orderData = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    })

    async onSubmit(e: Event) {
      e.preventDefault();
      // await fetch('https://httpbin.org/post', {  // ждем fetch
      //           method: 'POST',
      //           headers: {
      //               'Content-Type': 'multipart/form-data',
      //           },
      //           body: this.orderData as unknown as BodyInit,           
      //           })
      //       .then (response => {
      //           if (response.ok) {
      //             console.log(response)
      //              // console.log(Object.fromEntries(this.orderData))
      //              // dispatch(getShoppingItems([]));
      //               this.showModal()
      //           }})
      //       .catch((error) => {
      //         console.log(error)
      //           throw new Error("Something gone wrong, please try again", error);
      //             });
      };

      showModal(){
        this.success = true;
      }
    }


//     const handleSubmit = async (event: any)  => {
//       event.preventDefault();  // предотвращение перезагрузки страницы 
     
//       let formData = new FormData(event.target);  // формирование formData 

//       let order = {user: formData, items: shoppingItems}
//       await fetch('https://httpbin.org/post', {  // ждем fetch
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//           },
//           body: JSON.stringify(order),           
//           })
//       .then (response => {
//           if (response.ok) {
//               console.log(Object.fromEntries(formData))
//               dispatch(getShoppingItems([]));
//               showModal()
//           }})
//       .catch((error) => {
//           throw new Error("Something gone wrong, please try again", error);
//             });
// };



