import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { TrendingClothesComponent } from './modules/trending-clothes/trending-clothes/trending-clothes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'trending', component: TrendingClothesComponent },
//  { path: 'footer', component: FooterComponent },
//  { path: '**', component: NotFoundComponent },


  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
