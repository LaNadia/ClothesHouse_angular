import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterUserAction } from 'src/app/store/actions/createActions.action';
import { userFormGroupData } from '../types/userFormGroupData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private auth: AuthService, private store: Store){}


  register(data: FormGroup){

   // this.auth.register(data.value.email, data.value.password);

   const userData: userFormGroupData = {
    email: data.value.email,
    password: data.value.password,
   }

    this.store.dispatch(RegisterUserAction({userData: userData}))

  }

}
