import { Component, OnInit, inject } from '@angular/core';
import { CurrentWeatherSidebarComponent } from '../../components/current-weather-sidebar/current-weather-sidebar.component';
import { FollowingDaysAndHighlightsComponent } from '../../components/following-days-and-highlights/following-days-and-highlights.component';
import { WeatherService } from '../../services/weather.service';
import { Observable } from 'rxjs';
import { WeatherResult } from '../../models/weather.model';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from '../../components/search-sidebar/search-sidebar.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    CurrentWeatherSidebarComponent,
    FollowingDaysAndHighlightsComponent,
    SearchSidebarComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  private weatherService = inject(WeatherService);
  weatherInformation$: Observable<WeatherResult> | undefined;
  searchEnabled = false;
  currentCity = 'Tbilisi';

  getWeatherInfo() {
    this.weatherInformation$ = this.weatherService.getWeatherByLocation(
      this.currentCity
    );
  }

  searchCityHandler(event: string) {
    this.searchEnabled = true;
  }

  backToCitySidebarHandler(event: boolean) {
    this.searchEnabled = false;
  }

  emitCityHandler(cityName: string) {
    this.weatherInformation$ =
      this.weatherService.getWeatherByLocation(cityName);
    this.currentCity = cityName;
    localStorage.setItem('currentCity', this.currentCity);
  }

  ngOnInit() {
    this.getWeatherInfo();
    localStorage.setItem('currentCity', JSON.stringify(this.currentCity));
  }
}
