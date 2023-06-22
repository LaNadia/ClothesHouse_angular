import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit{

  counter = 3;
  inter: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.inter = setInterval(() => this.timer(), 1000);
  }
 
	timer() {
		this.counter--;
		if(this.counter <= 0) {
      clearInterval(this.inter);
			this.router.navigate(['/']);
		}
	}
}
