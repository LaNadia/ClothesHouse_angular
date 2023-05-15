import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_ENVIRONMENT } from 'src/app/firebase/firebaseEnvironment';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/store/effects/userEffects.effect';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', reducers.user),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthFormComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
