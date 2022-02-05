import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SwapiPeopleResponse } from 'src/app/models/swapi/swapi-people-response';
import { SwapiPerson } from 'src/app/models/swapi/swapi-person';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import { debounce, debounceTime } from 'rxjs/operators';
import { interval, Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  query: string = '';
  searching = false;
  searchResults: SwapiPeopleResponse = {
    results: [],
    query: ''
  };
  characterList : SwapiPerson[] = [];
  private subjectSearchInput: Subject<string> = new Subject();
  @Output() characterSelected = new EventEmitter<SwapiPerson>();

  constructor(private swapiService: SwapiService) {}

  ngOnInit(): void {
    this.subjectSearchInput.pipe((debounceTime(500))).subscribe(async (name) => {
      this.searching = true;
      const response: SwapiPeopleResponse = await this.swapiService.search(name)
      if (response.query === this.query) {
        this.characterList = response.results;
      }
      this.searching = false;
    })
  }

  onInput(name: string) {
    if (name !== '') {
      this.searching = true;
      this.subjectSearchInput.next(name)
    } else {
      this.characterList = [];
      this.searching = false;
    }
  }

  async onSubmit(character: SwapiPerson) {
    this.characterSelected.emit(character);
    this.resetSearch();
  }

  resetSearch() {
    this.query = '';
    this.characterList = [];
  }
}
