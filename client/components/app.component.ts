import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "app",
    template: `<div class="ui container">
        <div class="center">
            <img src='https://angular.io/resources/images/logos/standard/shield-large.png'>
        </div>
        <router-outlet></router-outlet>
        <div class="ui menu inverted teal fixed top massive">
            <a [routerLink]="['/']" class="item">Home</a>
            <a [routerLink]="['/firebase']" class="item">Firebase</a>
            <a [routerLink]="['/contact']" class="item">Contact Me</a>
        </div>
      </div>`
})
export class AppComponent {}