import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {
  private route: string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  set setRoute(value: string) {
    this.route = value;
  }
}
