import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '@app/core/authentication/authentication.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Student} from '@app/core/models';

@Component({
  selector: 'app-student-info-card',
  templateUrl: './student-info-card.component.html',
  styleUrls: ['./student-info-card.component.sass']
})
export class StudentInfoCardComponent implements OnInit {
  student: Student;

  constructor(
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe((student: Student) => {
        this.student = student;
    });
  }

  ngOnInit(): void {
  }

}
