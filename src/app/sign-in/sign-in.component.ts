import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router-deprecated';
import {AuthService} from '../services/auth.service';
import {AuthRouteHelper} from '../helpers/auth-route-helper';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css']
})
// @CanActivate(() => AuthRouteHelper.requireUnauth())
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,
  public af: AngularFire) {
     this.af.auth.subscribe(auth => console.log(auth));
   }

  ngOnInit() {
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }
  login() {
     this.af.auth.login({
       provider: AuthProviders.Twitter,
       method: AuthMethods.Popup,
     });
   }
  signInWithGithub(): void {
    this.authService.signInWithGithub()
      .then(() => this.postSignIn());
  }
  signInWithGoogle() {
    this.authService.signInWithGoogle().then(
      () => this.postSignIn());
  }

  signInWithTwiter() {
    this.authService.signInWithTwitter().then(
      () => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/cars']);
  }
}
