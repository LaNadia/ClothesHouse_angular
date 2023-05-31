import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { uploadPhotoService } from './services/uploadPhotoService.service';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    uploadPhotoService
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
