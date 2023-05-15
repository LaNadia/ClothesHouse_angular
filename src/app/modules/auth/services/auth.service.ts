import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router : Router) { }

  //login
  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( (res) => {
console.log(res)
      localStorage.setItem('token', 'true'),
      this.router.navigate(['/home'])
    },  err => {
      console.log(err.message)
      alert('Something went wrong')
      this.router.navigate(['/login'])
    })
  };

  //register

  register( email: string, password: string){

  return this.fireAuth.createUserWithEmailAndPassword(email, password).then((res)=> {
      alert('Success registration');
    //  this.router.navigate(['/home']);
      return res?.user
  
    }, err => {
      console.log(err.message)
      alert('Something went wrong');
      this.router.navigate(['/register']);
      return err.message
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
    })
  }
}
