import { Component } from '@angular/core';
import { TInfo } from './about-us-type.type';
import { info } from './about-us-DB';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  info: TInfo[] = info;

}
