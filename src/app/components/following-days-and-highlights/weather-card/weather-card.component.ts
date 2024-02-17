import { Component, Input } from '@angular/core';
import { Days } from '../../../models/weather.model';
import { RoundToClosestPipe } from '../../../pipes/round-to-closest.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [RoundToClosestPipe, CommonModule],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.scss',
})
export class WeatherCardComponent {
  @Input() dayInfo: Days | undefined;
}
