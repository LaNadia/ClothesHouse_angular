import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { RegisterUserAction } from 'src/app/store/actions/createActions.action';
import { userFormGroupData } from '../types/userFormGroupData';
import { Observable } from 'rxjs';
import { errorsSelector, userIsSubmittingSelector } from 'src/app/store/selectors/userSelectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  errors$!: Observable<any>;
  isSubmitting$!: Observable<boolean>;
  
  constructor(private store: Store){}

  ngOnInit(): void {
    this.errors$= this.store.pipe(select(errorsSelector));
    this.isSubmitting$ = this.store.pipe(select(userIsSubmittingSelector));
  }


  register(data: FormGroup){

   const userData: userFormGroupData = {
    email: data.value.email,
    password: data.value.password,
   };

    this.store.dispatch(RegisterUserAction({userData: userData}))

  }

}
