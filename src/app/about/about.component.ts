/*
 * Angular 2 decorators and services
 */
import {Component, OnInit, Input} from '@angular/core';

/**
 * App State service for Hot module reloading
 */
import { AppState } from './../app.service';

/*
 * Home Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'wm-about', // <app></app>
    providers: [AppState],
    // The template for our app
    template: `
    <div>
       <h1>About page</h1>
       
    </div>
    `
})
export class AboutComponent {
    lazy: string = 'lazyly';

    constructor() {
    }
}
