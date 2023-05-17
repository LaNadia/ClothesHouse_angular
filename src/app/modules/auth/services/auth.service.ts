import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router : Router) { }

  //login
  async login(email: string, password: string):Promise<any>{
   return await this.fireAuth.signInWithEmailAndPassword(email, password).then( (user) => {
    let copy = JSON.parse(JSON.stringify(user));
    console.log(user)
      return copy.user
    })
  };

  //register

  async register( email: string, password: string): Promise<any>{
  return await this.fireAuth.createUserWithEmailAndPassword(email, password).then((user)=> {
    let copy = JSON.parse(JSON.stringify(user));
      return copy.user
  })

  };

  //logout
  async logout() {
   return await this.fireAuth.signOut().then((res)=> {console.log(res); return res})

     // localStorage.removeItem('token');
    // }, err => {
    //   console.log(err.message);
    //   alert('Something went wrong')
    //   this.router.navigate(['/']);

  }
}
