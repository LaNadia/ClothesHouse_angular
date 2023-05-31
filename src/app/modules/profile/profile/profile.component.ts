import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, from, of } from 'rxjs';
import {
  displayNameSelector,
  emailSelector,
  photoUrlSelector,
} from 'src/app/store/selectors/userSelectors';
import { Auth, User, getAuth, updateProfile } from 'firebase/auth';
import { uploadPhotoService } from '../services/uploadPhotoService.service';

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

  constructor(
    private store: Store,
    private uploadPhotoService: uploadPhotoService
  ) {}

  ngOnInit(): void {
    this.displayName$ = this.store.pipe(select(displayNameSelector));
    this.photoUrl$ = this.store.pipe(select(photoUrlSelector));
    this.email$ = this.store.pipe(select(emailSelector));
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

    // if(this.auth.currentUser){

    //     updateProfile(this.auth.currentUser, {
    //     //  displayName: "Jane Q. User",

    //       photoURL: event.files[0],
    //     }).then(() => {
    //       // Profile updated!
    //       // ...
    //       // eslint-disable-next-line no-restricted-globals
    //       event?.preventDefault()
    //       alert('ok')
    //     }).catch((error) => {
    //       // An error occurred
    //       // ...
    //       // eslint-disable-next-line no-restricted-globals
    //       event?.preventDefault()
    //       alert(' notok')
    //     });
    //   }
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

  //  async uploadAvatar(file: any, user: any) {

  //     if (!file) {
  //           alert("No File Selected")
  //     } else {
  //           const storage = getStorage();

  //           const fileRef = ref(storage, user.uid + '.jpg');

  //           const metadata = {
  //             contentType: 'image/jpeg'
  //           };

  // console.log('good')
  //          // loading = true;

  //           const snapshop = await uploadBytesResumable(fileRef, file, metadata);

  //           const photoURL = await getDownloadURL(fileRef);

  //           updateProfile(user, {photoURL});

  //         //  loading = false;

  //         //  console.log(this.auth);

  //         //this.photoUrl$ = of(file)
  //     }

  //   }
}
