import { Component, OnInit } from '@angular/core';
import {CourseNavService} from '@app/core/services/course.nav.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(private courseNavService: CourseNavService) {
    this.courseNavService.updateRoute('Create');
  }

  ngOnInit(): void {
  }

}
