import { Component, Input } from '@angular/core';
import { WeatherResult } from '../../models/weather.model';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { TodaysHighlightsComponent } from './todays-highlights/todays-highlights.component';

@Component({
  selector: 'app-following-days-and-highlights',
  standalone: true,
  templateUrl: './following-days-and-highlights.component.html',
  styleUrl: './following-days-and-highlights.component.scss',
  imports: [WeatherCardComponent, TodaysHighlightsComponent],
})
export class FollowingDaysAndHighlightsComponent {
  @Input() weatherInfo: WeatherResult | undefined;
}
