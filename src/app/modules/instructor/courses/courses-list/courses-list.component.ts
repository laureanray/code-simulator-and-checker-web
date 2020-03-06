import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {CourseNavService} from '@app/core/services/course.nav.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})

export class CoursesListComponent implements OnInit {
  faPlus = faPlus;
  route: string;

  constructor(private courseNavService: CourseNavService) {
    this.courseNavService.updateRoute('My Courses');
  }

  ngOnInit(): void {

  }

}
