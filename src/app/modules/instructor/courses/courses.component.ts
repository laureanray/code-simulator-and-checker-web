import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CourseNavService} from '@app/core/services/course.nav.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  route: string;
  constructor(private courseNavService: CourseNavService) {
    this.courseNavService.currentRouteS.subscribe(route => {
        this.route = route;
    });
  }

  ngOnInit(): void {
  }


}
