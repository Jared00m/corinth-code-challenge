import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import strings from './api.service.strings';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = strings.baseUrl.dev;
  }

  get(route: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let headers = this.getHeaders();
      this.http
        .get(`${this.baseUrl}${route}`, {
        headers
        })
        .subscribe((response) => {
          try {
            resolve(response);
          } catch (error) {
            resolve(error);
          }
        },
        (error) => {
          reject(JSON.stringify(error));
        });
    });
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
