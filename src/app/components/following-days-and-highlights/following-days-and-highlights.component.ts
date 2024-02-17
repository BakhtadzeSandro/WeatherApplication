import { Component, Input } from '@angular/core';
import { WeatherResult } from '../../models/weather.model';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@Component({
  selector: 'app-following-days-and-highlights',
  standalone: true,
  imports: [WeatherCardComponent],
  templateUrl: './following-days-and-highlights.component.html',
  styleUrl: './following-days-and-highlights.component.scss',
})
export class FollowingDaysAndHighlightsComponent {
  @Input() weatherInfo: WeatherResult | undefined;
}
