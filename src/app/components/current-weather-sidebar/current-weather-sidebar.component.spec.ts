import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherSidebarComponent } from './current-weather-sidebar.component';

describe('CurrentWeatherSidebarComponent', () => {
  let component: CurrentWeatherSidebarComponent;
  let fixture: ComponentFixture<CurrentWeatherSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentWeatherSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
