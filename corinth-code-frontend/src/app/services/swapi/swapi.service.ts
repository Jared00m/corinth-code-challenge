import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import strings from './swapi.service.strings';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private api: ApiService) { }

  async searchSwapi(name: string)  {
    const response = await this.api.get(`${strings.apiRoutes.people}?search=${name}`);
    return response;
  }
}
