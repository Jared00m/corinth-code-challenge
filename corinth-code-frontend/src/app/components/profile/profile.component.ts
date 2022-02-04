import { Component, Input, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi/swapi.service';
import { SwapiPerson } from 'src/app/models/swapi/swapi-person';
import { SwapiHomeworld } from 'src/app/models/swapi/swapi-homeworld';
import { SwapiFilms } from 'src/app/models/swapi/swapi-films';
import { SwapiStarship } from 'src/app/models/swapi/swapit-starships';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  @Input() character: SwapiPerson = {
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

  loading = true;

  films: SwapiFilms[] = [];

  starships: SwapiStarship[] = [];

  homeworld: SwapiHomeworld = {
    climate: '',
    created: new Date(),
    diameter: 0,
    edited: new Date(),
    films: [],
    gravity: '',
    name: '',
    orbital_period: 0,
    population: 0,
    residents: [],
    rotation_period: 0,
    surface_water: 0,
    terrain: '',
    url: ''
  };

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {}

  async ngOnChanges() {
    this.loading = true;
    await this.getFilms();
    await this.getStarships();
    await this.getHomeworld();
    this.loading = false;
  }

  async getFilms() {
    this.films = [];
    for (let url of this.character.films) {
      const response = await this.swapiService.getFilm(url);
      this.films.push(response);
    }
  }

  async getStarships() {
    this.starships = [];
    for (let url of this.character.starships) {
      const response = await this.swapiService.getStarship(url);
      this.starships.push(response);
    }
  }

  async getHomeworld() {
    this.homeworld = await this.swapiService.getHomeworld(this.character.homeworld);
  }
}
