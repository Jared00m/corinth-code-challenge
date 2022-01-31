import { Component } from '@angular/core';
import { SwapiPeopleResponse } from './models/swapi/swapi-people-response';
import { SwapiPerson } from './models/swapi/swapi-person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  notFound = false;
  results: SwapiPerson[] = [];
  character: SwapiPerson = {
    name: '',
    mass: '',
    height: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: undefined,
    edited: undefined,
    url: ''
  };

  onCharacterSelected(data: SwapiPerson[]) {
    if (data.length === 1) {
      this.character = data[0];
      this.notFound = false;
    } else if (data.length === 0 ){
      this.resetPerson();
      this.results = [];
      this.notFound = true;
    } else if (data.length > 1) {
      this.resetPerson();
      this.results = data;
      this.notFound = false;
    }
  }

  onClickCharacter(character: SwapiPerson) {
    this.character = character;
    this.results = [];
  }

  resetPerson() {
    this.character = {
      name: '',
      mass: '',
      height: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
      homeworld: '',
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: undefined,
      edited: undefined,
      url: ''
    }
  }
}
