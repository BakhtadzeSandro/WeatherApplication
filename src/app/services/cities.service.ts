import { Injectable } from '@angular/core';
import { capitalCities } from '../mock-data/cities';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor() {}

  getCapitalCities() {
    return of(capitalCities);
  }
}
