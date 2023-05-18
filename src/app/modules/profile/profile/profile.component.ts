import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { displayNameSelector, emailSelector, photoUrlSelector } from 'src/app/store/selectors/userSelectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  displayName$! : Observable<string | null>;
  photoUrl$!: Observable<string | null>;
  email$!: Observable<string | null>;

  constructor(private store: Store){}

  ngOnInit(): void {
    this.displayName$ = this.store.pipe(select(displayNameSelector));
    this.photoUrl$ = this.store.pipe(select(photoUrlSelector));
    this.email$ = this.store.pipe(select(emailSelector));

    
  }

}
