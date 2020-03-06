import { Component, OnInit } from '@angular/core';
import {CourseNavService} from '@app/core/services/course.nav.service';
import {faPlus, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
  faPlus = faPlus;
  faSave = faSave;

  moduleNumber = 1;

  constructor(private courseNavService: CourseNavService) {
    this.courseNavService.updateRoute('Create');
  }

  ngOnInit(): void {
  }

  addModule() {
    this.moduleNumber++;
  }

}
