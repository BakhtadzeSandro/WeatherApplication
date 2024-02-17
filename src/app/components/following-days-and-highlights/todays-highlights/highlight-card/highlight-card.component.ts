import { Component, Input } from '@angular/core';
import { HighlightExtraWeatherInfo } from '../../../../models/highlights.model';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-highlight-card',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './highlight-card.component.html',
  styleUrl: './highlight-card.component.scss',
})
export class HighlightCardComponent {
  @Input() extraWeatherInfo: HighlightExtraWeatherInfo | undefined;
}
