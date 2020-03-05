
import { Component, OnInit } from '@angular/core';
import {Instructor} from '@app/core/models/instructor';
import {AuthenticationService} from '@app/core/authentication/authentication.service';

@Component({
  selector: 'app-instructor-info-card',
  templateUrl: './instructor-info-card.component.html',
  styleUrls: ['./instructor-info-card.component.sass']
})
export class InstructorInfoCardComponent implements OnInit {
  instructor: Instructor;

  constructor(
    private authenticaitonService: AuthenticationService
  ) {
    this.authenticaitonService.currentUser.subscribe((instructor: Instructor) => {
      this.instructor = instructor;
    });
  }

  ngOnInit(): void {
  }

}
