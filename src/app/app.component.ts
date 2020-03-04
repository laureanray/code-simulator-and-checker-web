import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@app/core/authentication/authentication.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  isLoggedIn;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    // this.isLoggedIn = authenticationService.isLoggedIn;
    this.authenticationService.currentUser.subscribe(data => {
      this.isLoggedIn = !!data;
    });
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
