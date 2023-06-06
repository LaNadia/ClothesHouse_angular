import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { uploadPhotoService } from './services/uploadPhotoService.service';
import { ReactiveFormsModule } from '@angular/forms';
import { uploadNameService } from './services/updateNameSerive.service';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [uploadPhotoService, uploadNameService],
  exports: [ProfileComponent],
})
export class ProfileModule {}
