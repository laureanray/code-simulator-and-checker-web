import '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@app/core/authentication/authentication.service';
import {Observable} from 'rxjs';
import {Router, RouterOutlet} from '@angular/router';
import {User} from '@app/core/models/user';
import {animation} from '@app/ux/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    animation
  ]
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
}
