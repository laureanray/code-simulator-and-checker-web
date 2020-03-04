import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@app/core/authentication/authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }
}
