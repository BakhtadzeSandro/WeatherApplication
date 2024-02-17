import { Component, Input, OnInit, inject } from '@angular/core';
import { WeatherResult } from '../../../models/weather.model';
import { RoundToClosestPipe } from '../../../pipes/round-to-closest.pipe';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../../services/weather.service';
import { HighlightExtraWeatherInfo } from '../../../models/highlights.model';
import { HighlightCardComponent } from './highlight-card/highlight-card.component';

@Component({
  selector: 'app-todays-highlights',
  standalone: true,
  templateUrl: './todays-highlights.component.html',
  styleUrl: './todays-highlights.component.scss',
  imports: [RoundToClosestPipe, CommonModule, HighlightCardComponent],
})
export class TodaysHighlightsComponent implements OnInit {
  @Input() extraWeatherInfo: WeatherResult | undefined;
  highlightsArray: HighlightExtraWeatherInfo[] | undefined = [];
  private weatherService = inject(WeatherService);

  getCurrentCityWeatherInfo() {
    const currentCity = localStorage.getItem('currentCity');
    if (currentCity) {
      this.weatherService.getWeatherByLocation(currentCity).subscribe((val) => {
        let windStatus: HighlightExtraWeatherInfo = {
          title: 'Wind status',
          value: `${val.current.wind_kph}kp/h`,
          wind_dir: val.current.wind_dir,
        };
        let humidity: HighlightExtraWeatherInfo = {
          title: 'Humidity',
          value: val.current.humidity,
          hasProgressBar: true,
        };
        let visibility: HighlightExtraWeatherInfo = {
          title: 'Visibility',
          value: `${val.current.vis_km} kms`,
        };
        let airPressure: HighlightExtraWeatherInfo = {
          title: 'Air pressure',
          value: `${val.current.pressure_mb} mb`,
        };
        this.highlightsArray?.push(
          windStatus,
          humidity,
          visibility,
          airPressure
        );
      });
    }
  }

  ngOnInit(): void {
    this.getCurrentCityWeatherInfo();
  }
}
