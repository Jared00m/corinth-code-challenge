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

  onCharacterSelected(character: SwapiPerson) {
    this.character = character;
    this.notFound = false;
  }
}
