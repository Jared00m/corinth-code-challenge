import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  query = '';
  @Output() characterSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onInput() {
    console.log(this.query);
  }

  onSubmit() {
    console.log('Selected character is ' + this.query);
    this.characterSelected.emit(this.query);
  }
}
