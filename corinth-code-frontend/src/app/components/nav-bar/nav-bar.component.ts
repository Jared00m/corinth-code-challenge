import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SwapiPeopleResponse } from 'src/app/models/swapi/swapi-people-response';
import { SwapiPerson } from 'src/app/models/swapi/swapi-person';
import { SwapiService } from 'src/app/services/swapi/swapi.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  query = '';
  @Output() characterSelected = new EventEmitter<SwapiPerson[]>();

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.resetSearch();
  }

  async onSubmit() {
    const response: SwapiPerson[] = await this.swapiService.search(this.query);
    this.characterSelected.emit(response);
    this.resetSearch();
  }

  resetSearch() {
    this.query = '';
  }
}
