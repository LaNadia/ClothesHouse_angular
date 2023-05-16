import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService){}

  login(data: FormGroup){
   
    this.auth.login(data.value.email, data.value.password);

  }


  // isSubmitting$!: Observable<boolean>;
  // user$!: Observable<any>;
  // errors$!: Observable<any>;

  // constructor(private store: Store){}

  // ngOnInit(): void {
  //   this.user$ = this.store.pipe(select(userSelector));
  //   this.isSubmitting$ = this.store.pipe(select(userIsSubmittingSelector));
  //   this.errors$= this.store.pipe(select(errorsSelector));
  // }
}
