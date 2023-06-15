import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { uploadPhotoService } from './services/uploadPhotoService.service';
import { ReactiveFormsModule } from '@angular/forms';
import { uploadNameService } from './services/updateNameSerive.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProfileComponent }
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [uploadPhotoService, uploadNameService],
  exports: [ProfileComponent],
})
export class ProfileModule {}
