import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetCardsComponent } from './fleet-cards.component';

describe('FleetCardsComponent', () => {
  let component: FleetCardsComponent;
  let fixture: ComponentFixture<FleetCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FleetCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
