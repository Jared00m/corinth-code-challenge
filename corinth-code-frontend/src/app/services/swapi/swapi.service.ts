import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import strings from './swapi.service.strings';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private api: ApiService) { }

  async search(name: string)  {
    const response = await this.api.get(`${strings.apiRoutes.people}?search=${name}`);
    return response;
  }

  async getFilm(url: string) {
    const response = await this.api.get(`${strings.apiRoutes.films}?url=${url}`)
    return response;
  }

  async getStarship(url: string) {
    const response = await this.api.get(`${strings.apiRoutes.starships}?url=${url}`);
    return response;
  }

  async getHomeworld(url: string) {
    const response = await this.api.get(`${strings.apiRoutes.homeworld}?url=${url}`);
    return response;
  }
}
