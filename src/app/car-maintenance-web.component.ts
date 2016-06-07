import { Component } from '@angular/core';
import {CarListComponent} from './car-list';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { APP_SHELL_DIRECTIVES } from '@angular/app-shell';
import {MdButton} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {SignInComponent} from './sign-in';

@Component({
  moduleId: module.id,
  selector: 'car-maintenance-web-app',
  templateUrl: 'car-maintenance-web.component.html',
  styleUrls: ['car-maintenance-web.component.css'],
  directives: [MdToolbar, MdButton, MdIcon, MD_LIST_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES, ROUTER_DIRECTIVES, CarListComponent],
  providers: [ROUTER_PROVIDERS, MdIconRegistry]
})
@RouteConfig([
  {
    path: '/',
    name: 'SignIn',
    component: SignInComponent
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarListComponent,    
  }

])
export class CarMaintenanceWebAppComponent {
  title = 'car-maintenance-web works!';
}
