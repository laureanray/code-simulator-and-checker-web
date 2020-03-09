import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {AuthenticationService} from '@app/core/authentication/authentication.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  error = '';
  submitted = false;
  errorMsg: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

    console.log(this.authenticationService.currentUser);
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl;
  }

  get f() { return this.loginForm.controls; }

  onRegister() {
    this.router.navigate(['register']);
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);

          switch (data) {
            case 'ROLE_STUDENT':
              this.router.navigate([this.returnUrl || 'student']);
              break;
            case 'ROLE_INSTRUCTOR':
              this.router.navigate([this.returnUrl || 'instructor']);
              break;
            case 'ROLE_ADMIN':
              this.router.navigate([this.returnUrl || 'admin']);
              break;
            default:
                this.router.navigate(['/']);

          }
        },
        error => {
          console.log(error);
          if (error.status === 400) {
            this.errorMsg = 'Invalid credentials';
          } else {
            this.errorMsg = 'Can\'t connect. Please try again.';
          }
        }
      );
  }
}
