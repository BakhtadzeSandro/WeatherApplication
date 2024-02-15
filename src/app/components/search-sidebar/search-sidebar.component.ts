import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitiesService } from '../../services/cities.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-sidebar',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './search-sidebar.component.html',
  styleUrl: './search-sidebar.component.scss',
})
export class SearchSidebarComponent {
  @Output() backToCitySidebar = new EventEmitter<boolean>();
  @Output() emitCity = new EventEmitter<string>();
  searchEnabled = true;
  cityName = new FormControl('');
  lastFiveCities: string[] = [];
  capitalCities: string[] = [];

  private citiesService = inject(CitiesService);
  private snackBar = inject(MatSnackBar);

  getCityName() {
    let city = this.cityName.value;
    if (city) {
      const capitalizedCityName =
        city[0].toUpperCase() + city.slice(1).toLowerCase();
      if (this.capitalCities.includes(capitalizedCityName)) {
        this.validateCities(capitalizedCityName);
      } else {
        this.handleNoCity();
      }
    }
  }

  handleNoCity() {
    this.snackBar.open('No such city in our database', 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
    });
    this.cityName.reset();
  }

  validateCities(cityName: string) {
    if (this.lastFiveCities.length == 5) {
      this.lastFiveCities.pop();
      this.lastFiveCities.unshift(cityName);
      localStorage.setItem(
        'searchedCities',
        JSON.stringify(this.lastFiveCities)
      );
    } else if (
      this.lastFiveCities.length < 5 &&
      !this.lastFiveCities.includes(cityName)
    ) {
      this.lastFiveCities.unshift(cityName);
      localStorage.setItem(
        'searchedCities',
        JSON.stringify(this.lastFiveCities)
      );
    } else if (this.lastFiveCities.includes(cityName)) {
      this.snackBar.open(`${cityName} is already in the list.`, 'X', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000,
      });
    }
    this.cityName.reset();
  }

  switchToCitySidebar() {
    this.backToCitySidebar.emit(this.searchEnabled);
  }

  emitCityName(name: string) {
    this.emitCity.emit(name);
    this.switchToCitySidebar();
  }

  ngOnInit() {
    const citiesFromLocalStorage = localStorage.getItem('searchedCities');
    if (citiesFromLocalStorage) {
      this.lastFiveCities = JSON.parse(citiesFromLocalStorage);
    }
    this.citiesService
      .getCapitalCities()
      .subscribe((val) => (this.capitalCities = val));
  }
}
