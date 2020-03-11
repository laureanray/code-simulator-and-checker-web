import { Component, OnInit } from '@angular/core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  faLaptopCode = faLaptopCode;
  constructor() { }

  ngOnInit(): void {
  }

}
