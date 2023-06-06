import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User, updateProfile } from 'firebase/auth';
import { ChangeNameUserFailure, ChangeNameUserSuccess } from 'src/app/store/actions/createActions.action';


@Injectable()
export class uploadNameService {
  constructor(private store: Store){}

  async uploadName(name: string, user: any) {
    console.log(name, user);

  

    return await updateProfile(user, {
      displayName: name
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log(user);
        this.store.dispatch(ChangeNameUserSuccess({name}));
        return;
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
        this.store.dispatch(ChangeNameUserFailure(error));
        return error;
      });
  }
}
