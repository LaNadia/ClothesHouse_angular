import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrendingClothesComponent } from './modules/trending-clothes/trending-clothes/trending-clothes.component';
import { NewArrivalComponent } from './modules/new-arrival/new-arrival/new-arrival.component';
import { JournalComponent } from './modules/journal/journal/journal.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ProfileComponent } from './modules/profile/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'trending', component: TrendingClothesComponent },
  { path: 'newarrival', component: NewArrivalComponent },
  { path: 'journal/:title', component: JournalComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
//  { path: '**', component: NotFoundComponent },


  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
