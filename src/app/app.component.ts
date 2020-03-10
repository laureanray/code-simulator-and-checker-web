import '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router, RouterOutlet} from '@angular/router';
import {User} from './core/models/user';
import {AuthenticationService} from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  isLoggedIn;
  user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    // this.isLoggedIn = authenticationService.isLoggedIn;
    this.authenticationService.currentUser.subscribe((data: User) => {
      this.isLoggedIn = !!data;
      if (data) {
            this.user = data;
      }
    });

  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  accountSettings() {
    console.log('Asda');
  }
}
