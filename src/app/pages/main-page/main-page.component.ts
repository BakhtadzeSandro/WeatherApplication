import { Component, OnInit, inject } from '@angular/core';
import { CurrentWeatherSidebarComponent } from '../../components/current-weather-sidebar/current-weather-sidebar.component';
import { FollowingDaysAndHighlightsComponent } from '../../components/following-days-and-highlights/following-days-and-highlights.component';
import { WeatherService } from '../../services/weather.service';
import { Observable } from 'rxjs';
import { WeatherResult } from '../../models/weather.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    CurrentWeatherSidebarComponent,
    FollowingDaysAndHighlightsComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  private weatherService = inject(WeatherService);
  weatherInformation$: Observable<WeatherResult> | undefined;

  getWeatherInfo() {
    this.weatherInformation$ =
      this.weatherService.getWeatherByLocation('Tbilisi');
  }

  ngOnInit() {
    this.getWeatherInfo();
  }
}
