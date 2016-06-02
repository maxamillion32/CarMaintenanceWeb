import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CarMaintenanceWebAppComponent, environment } from './app/';
import {ROUTER_PROVIDERS} from '@angular/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(CarMaintenanceWebAppComponent,[FIREBASE_PROVIDERS,
  defaultFirebase('https://project-5516481825204106582.firebaseio.com'),
  ROUTER_PROVIDERS]);
