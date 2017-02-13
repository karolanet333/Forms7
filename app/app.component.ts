import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> 
            <!--
              <basic-http></basic-http>
              <log-component></log-component>
              <data-component></data-component>
              <data-component-composed></data-component-composed>
              <div [highlight]="'yellow'" [defaultColor]="'red'">Highlighted Text</div>
              <hr>
              <div>Unless Directive</div>
              <button (click)="switch=!switch">click to work with UnlessDirective</button>
              <p>Variable: {{switch}}</p>
              <p *unless="switch">unless directive</p>
            -->
            <hr>
            <!--
              <a [routerLink]="['']" [queryParams]="{analytics: 500}" [fragment]="'section1'" routerLinkActive="active" >Home</a> |
              <input type="text" #id (input)="0">
              <a [routerLink]="['/user', id.value]" [preserveQueryParams]="true" routerLinkActive="active" >User</a>
              <hr>
              <router-outlet></router-outlet>
            -->
            <template-driven></template-driven>
            <!--<data-driven></data-driven>-->
            `,
    styles: [`
      .active{
        color:red;
      }
    `]
})
export class AppComponent  { 
  name = 'Caro'; 
  switch = true;
}
