import { NgModule } from "@angular/core";
import { AboutUsComponent } from "./about-us/about-us.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FooterModule } from "../../components/footer/footer.module";

const routes: Routes = [
    { path: '', component: AboutUsComponent }
  ]
  
  @NgModule({
    declarations: [
      AboutUsComponent
    ],
    imports: [
      CommonModule,
      FooterModule,
      RouterModule.forChild(routes)
    ],
    exports: [
        AboutUsComponent
    ]
  })
  export class NewArrivalModule { }
  