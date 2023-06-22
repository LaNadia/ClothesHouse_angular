import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { CartComponent } from './modules/cart/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent},
  { path: 'trending', 
    loadChildren:() => import('./modules/trending-clothes/trending-clothes.module').then(m => m.TrendingClothesModule)},
  { path: 'newarrival',
    loadChildren:() => import('./modules/new-arrival/new-arrival.module').then(m => m.NewArrivalModule)},
  { path: 'journal/:title',
    loadChildren:() => import('./modules/journal/journal.module').then(m => m.JournalModule)},
  { path: 'about', 
    loadChildren:() => import('./modules/about-us/about-us.module').then(m => m.NewArrivalModule)},
  { path: 'profile',
    loadChildren:() => import('./modules/profile/profile.module').then(m => m.ProfileModule)},
  { path: 'checkout',
    loadChildren:() => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
