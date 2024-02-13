import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { WeatherResult } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherByLocation(location: string): Observable<WeatherResult> {
    return this.http.get<WeatherResult>(
      `${environment.apiBase + location}&days=3&hour=0`
    );
  }
}
