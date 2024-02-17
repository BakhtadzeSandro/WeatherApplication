import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundToClosest',
  standalone: true,
})
export class RoundToClosestPipe implements PipeTransform {
  transform(value: number | undefined): number {
    if (value) {
      return Math.round(value);
    }
    return 0;
  }
}
