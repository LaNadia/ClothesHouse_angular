import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { FIREBASE_ENVIRONMENT } from './firebase/firebaseEnvironment';
import { AuthModule } from './modules/auth/auth.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { localStorageSync } from 'ngrx-store-localstorage';
import { CartModule } from './modules/cart/cart.module';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { FloatElementModule } from './components/utils/float-element/float-element.module';
import { uploadNameService } from './modules/profile/services/updateNameSerive.service';
import { NotFoundComponent } from './components/not-found/not-found.component';

// ngrx-store-localstorage function
export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      'trendingClothes',
      'newArrival',
      'journalStory',
      'relatedStories',
      'user',
      'cart'
    ],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartIconComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    CartModule,
    FloatElementModule,
    AngularFireModule.initializeApp(FIREBASE_ENVIRONMENT),
    AngularFireAuthModule,
    StoreModule.forRoot({ router: routerReducer }, { metaReducers }),
    StoreRouterConnectingModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot(),
  ],
  providers: [uploadNameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
