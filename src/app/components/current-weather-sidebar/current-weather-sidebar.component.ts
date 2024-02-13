import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherResult } from '../../models/weather.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, DatePipe } from '@angular/common';
@Component({
  selector: 'app-current-weather-sidebar',
  standalone: true,
  imports: [MatIconModule, DatePipe, CommonModule],
  templateUrl: './current-weather-sidebar.component.html',
  styleUrl: './current-weather-sidebar.component.scss',
})
export class CurrentWeatherSidebarComponent {
  @Input() currentWeatherInfo: WeatherResult | undefined;
  @Output() searchEnabled = new EventEmitter<string>();

  currentDate = new Date().toDateString();

  searchCity(cityName: string | undefined) {
    this.searchEnabled.emit(cityName);
  }
}
