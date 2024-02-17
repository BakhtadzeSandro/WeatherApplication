import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysHighlightsComponent } from './todays-highlights.component';

describe('TodaysHighlightsComponent', () => {
  let component: TodaysHighlightsComponent;
  let fixture: ComponentFixture<TodaysHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaysHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
