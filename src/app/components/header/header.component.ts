import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogoutUserAction } from 'src/app/store/actions/createActions.action';
import { currentUrl } from 'src/app/store/selectors/ngrx-store-selectors.selectors';
import { tokenSelector } from 'src/app/store/selectors/userSelectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  isLoggedIn$!: Observable<string | null>;
  location!: any;
  open: boolean = false;

  constructor(private store: Store){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(tokenSelector));
    this.location = this.store.pipe(select(currentUrl));
  }

  logout(){
    this.store.dispatch(LogoutUserAction())
  };

  setOpen(){
    this.open = !this.open;
  }
}
