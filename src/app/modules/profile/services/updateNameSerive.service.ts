import { Injectable } from '@angular/core';
import { updateProfile } from 'firebase/auth';

@Injectable()
export class uploadNameService {
  async uploadName(name: string, user: any) {
    console.log(name);
    return await updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log(user);
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  }
}
