
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../core/authentication/authentication.service';
import {Instructor} from '../../../../core/models/instructor';

@Component({
  selector: 'app-instructor-info-card',
  templateUrl: './instructor-info-card.component.html',
  styleUrls: ['./instructor-info-card.component.sass']
})
export class InstructorInfoCardComponent implements OnInit {
  instructor: Instructor;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe((instructor: Instructor) => {
      this.instructor = instructor;
    });
  }

  ngOnInit(): void {
  }

}
