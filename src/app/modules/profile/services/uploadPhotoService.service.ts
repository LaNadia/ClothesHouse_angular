import { Injectable } from '@angular/core';
import { updateProfile } from 'firebase/auth';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';

@Injectable()
export class uploadPhotoService {
  async uploadAvatar(file: any, user: any): Promise<any> {
    const storage = getStorage();

    const fileRef = ref(storage, user.uid + '.jpg');

    const metadata = {
      contentType: 'image/jpeg',
    };

    let res: string | boolean | PromiseLike<string | boolean>;

    return (res = await uploadBytesResumable(fileRef, file, metadata)
      .then(() => {
        const photoURL = getDownloadURL(fileRef);
        return photoURL;
      })
      .then((photoURL) => {
        if (photoURL) {
          updateProfile(user, photoURL);
          console.log('uploaded successfully');
          return;
        }
        console.log('unsuccessful promise');
      })
      .catch((err) => {
        console.log(err);
        return err;
      }));
  }
}
