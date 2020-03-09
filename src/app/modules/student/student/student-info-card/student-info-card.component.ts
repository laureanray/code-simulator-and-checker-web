import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../../../core/authentication/authentication.service';
import {Student} from '../../../../core/models';

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
