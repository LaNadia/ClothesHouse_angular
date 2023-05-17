import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { userFormGroupData } from '../types/userFormGroupData';
import { LoginUserAction } from 'src/app/store/actions/createActions.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userSelector, userIsSubmittingSelector, errorsSelector } from 'src/app/store/selectors/userSelectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  isSubmitting$!: Observable<boolean>;
  user$!: Observable<any>;
  errors$!: Observable<any>;

  constructor(private store: Store){}

  login(data: FormGroup){
   const userData: userFormGroupData = {
    email: data.value.email,
    password: data.value.password,
   };

    this.store.dispatch(LoginUserAction({userData: userData}));
  }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select(userSelector));
    this.isSubmitting$ = this.store.pipe(select(userIsSubmittingSelector));
    this.errors$= this.store.pipe(select(errorsSelector));
  }
}
