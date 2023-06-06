import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  displayNameSelector,
  emailSelector,
  photoUrlSelector,
} from 'src/app/store/selectors/userSelectors';
import { User, getAuth } from 'firebase/auth';
import { uploadPhotoService } from '../services/uploadPhotoService.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { uploadNameService } from '../services/updateNameSerive.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  displayName$!: Observable<string | null>;
  photoUrl$!: Observable<string | null>;
  email$!: Observable<string | null>;
  auth: User | null = null;
  uploadedFile: any = null;
  uploadedFileName: string | null = null;
  nameTyped: string | null = null;
  name!: FormGroup;
  isChangeNameCheckboxChecked: boolean = false;
  @ViewChild('nameInput', { read: ElementRef }) nameInput!: ElementRef;
  @ViewChild('changeNameCheckbox', { read: ElementRef })
  changeNameCheckbox!: ElementRef;

  constructor(
    private store: Store,
    private uploadPhotoService: uploadPhotoService,
    private changeNameService: uploadNameService,
    private fb: FormBuilder
  ) {
    this.name = this.fb.group({
      name: [''],
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.name);
    let name = this.name.value['name'];
    this.auth = getAuth().currentUser;
    //had to call changeNameService here and then dispatch,
    //as dispatch here caused error and didnt save user name
    this.changeNameService.uploadName(name, this.auth)
  }

  ngOnInit(): void {
    this.displayName$ = this.store.pipe(select(displayNameSelector));
    this.photoUrl$! = this.store.pipe(select(photoUrlSelector));
    this.email$! = this.store.pipe(select(emailSelector));
  }

  handleChange(event: any) {
    console.log(event.files[0]);
    const check = this.checkPhotoType(event.files[0].type);
    if (check) {
      this.uploadedFile = event.files[0];
      this.auth = getAuth().currentUser;
      this.uploadedFileName = this.uploadedFile.name;
      console.log(this.uploadedFileName);
    } else {
      alert('Please upload a JPG/PNG file');
    }
  }

  changePhoto() {
    //hoping for positive response from server
    this.photoUrl$ = of(URL.createObjectURL(this.uploadedFile));

    this.uploadPhotoService.uploadAvatar(this.uploadedFile, this.auth);
    this.uploadedFile = null;
    this.uploadedFileName = null;
  }

  checkPhotoType(type: string): boolean {
    return type == 'image/jpeg' || type == 'image/png' ? true : false;
  }

  onInputName(e: Event) {
    console.log(this.nameInput.nativeElement.value);
    this.nameTyped = this.nameInput.nativeElement.value;
  }

  isChecked(): void {
    this.isChangeNameCheckboxChecked = !this.isChangeNameCheckboxChecked;
  }
}
