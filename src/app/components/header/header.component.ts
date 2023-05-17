import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { LogoutUserAction } from 'src/app/store/actions/createActions.action';
import { tokenSelector } from 'src/app/store/selectors/userSelectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLoggedIn$!: Observable<string | null>;
  open: boolean = false;

  constructor(private auth: AuthService, private router : Router, private store: Store){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(tokenSelector));
    console.log(this.isLoggedIn$)
  }


  logout(){
    console.log('loguot')
   // this.auth.logout();
  //  this.router.navigate(['/home'])
  this.store.dispatch(LogoutUserAction())
  };

  setOpen(){
    this.open = !this.open;
    console.log(this.open)
  }
}
