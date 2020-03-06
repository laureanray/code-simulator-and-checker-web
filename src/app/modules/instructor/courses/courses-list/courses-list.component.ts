import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})

export class CoursesListComponent implements OnInit {
  faPlus = faPlus;
  route: string;

  constructor() { }

  ngOnInit(): void {

  }

}
