import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-auth-form[type]',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Input('type') type: any;

  @Output() registerSubmitted = new EventEmitter<FormGroup>();
  submitRegister() {
      this.registerSubmitted.emit(this.data);
  }

  @Output() loginSubmitted = new EventEmitter<FormGroup>();
  submitLogin() {
      this.loginSubmitted.emit(this.data);
  }

  data = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
  });
  
  
}
