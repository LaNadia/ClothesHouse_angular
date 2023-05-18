import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Action, ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrendingClothesModule } from './modules/trending-clothes/trending-clothes.module';
import { CheckUsModule } from './modules/check-us/check-us.module';
import { NewArrivalModule } from './modules/new-arrival/new-arrival.module';
import { CardListModule } from './modules/card-list/card-list.module';
import { JournalModule } from './modules/journal/journal.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterModule } from './components/footer/footer.module';
import { AngularFireModule } from '@angular/fire/compat'
import { FIREBASE_ENVIRONMENT } from './firebase/firebaseEnvironment';
import { AuthModule } from './modules/auth/auth.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ProfileModule } from './modules/profile/profile.module';
import { localStorageSync } from 'ngrx-store-localstorage';


// ngrx-store-localstorage
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(
    {keys: ['trendingClothes', 'newArrival', 'journalStory', 'relatedStories', 'user'],
    rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TrendingClothesModule,
    CheckUsModule,
    NewArrivalModule,
    CardListModule,
    JournalModule,
    FooterModule,
    AuthModule,
    ProfileModule,
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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
