import { Component } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nebular-bootcamp';
  items: NbMenuItem[];

  constructor() {
    this.items = [
      {
        title: 'Home',
        icon: 'person-outline',
        link: 'home',
      },
    ];
  }
}
