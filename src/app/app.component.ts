import '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router, RouterOutlet} from '@angular/router';
import {User} from './core/models/user';
import {AuthenticationService} from './core/authentication/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import {LogoutModalComponent} from './shared/logout-modal/logout-modal.component';

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
    private router: Router,
    public dialog: MatDialog
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

  accountSettings() {
    console.log('Asda');
  }

  logoutModal(): void {
    const dialogRef = this.dialog.open(LogoutModalComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

