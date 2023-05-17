import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router : Router) { }

  //login
  async login(email: string, password: string):Promise<any>{
   return await this.fireAuth.signInWithEmailAndPassword(email, password).then( (res) => {
      console.log(res)
      localStorage.setItem('token', 'true')
      return res?.user
    })
  };

  //register

  async register( email: string, password: string): Promise<any>{
  return await this.fireAuth.createUserWithEmailAndPassword(email, password).then((res)=> {
      return res?.user
  })

  };

  //logout
  logout() {
    this.fireAuth.signOut().then(()=> {
      localStorage.removeItem('token');
      this.router.navigate(['/home'])
    }, err => {
      console.log(err.message);
      alert('Something went wrong')
      this.router.navigate(['/']);
    })
  }
}
