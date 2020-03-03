import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent implements OnInit {
  searchQuery = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(): void {
    console.log(this.searchQuery.value);
  }

}
