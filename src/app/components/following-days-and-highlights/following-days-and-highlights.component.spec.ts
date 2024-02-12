import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingDaysAndHighlightsComponent } from './following-days-and-highlights.component';

describe('FollowingDaysAndHighlightsComponent', () => {
  let component: FollowingDaysAndHighlightsComponent;
  let fixture: ComponentFixture<FollowingDaysAndHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowingDaysAndHighlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FollowingDaysAndHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
