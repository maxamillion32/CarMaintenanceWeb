import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CarMaintenanceWebAppComponent, environment } from './app/';
import {ROUTER_PROVIDERS} from '@angular/router';
import {FIREBASE_PROVIDERS, defaultFirebase,
  firebaseAuthConfig, AuthMethods,
  AuthProviders, AngularFire} from 'angularfire2';
import { APP_SHELL_RUNTIME_PROVIDERS } from '@angular/app-shell';
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthService} from './app/services/auth.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(CarMaintenanceWebAppComponent, [AuthService, HTTP_PROVIDERS,
  APP_SHELL_RUNTIME_PROVIDERS, FIREBASE_PROVIDERS,
  defaultFirebase('https://project-5516481825204106582.firebaseio.com'),
  firebaseAuthConfig({ provider: AuthProviders.Google, method: AuthMethods.Popup }),
  ROUTER_PROVIDERS]);
