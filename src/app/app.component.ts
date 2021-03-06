/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>Some footer</span>
    </footer>
  `
})
export class AppComponent {

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
