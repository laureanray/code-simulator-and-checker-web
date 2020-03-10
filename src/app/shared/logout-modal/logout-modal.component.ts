import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthenticationService} from '../../core/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.sass']
})
export class LogoutModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LogoutModalComponent>,
    private authenticationService: AuthenticationService,
    private router: Router
    ) {}


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
    this.dialogRef.close();
  }
}
