import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi/swapi.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  query = '';
  @Output() characterSelected = new EventEmitter<string>();

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
  }

  onInput() {
    console.log(this.query);
  }

  async onSubmit() {
    console.log('Selected character is ' + this.query);
    this.characterSelected.emit(this.query);
    const response = await this.swapiService.searchSwapi(this.query);
    console.log(response);
  }
}
