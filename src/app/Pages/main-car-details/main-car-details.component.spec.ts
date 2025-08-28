import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarDetailsComponent } from './main-car-details.component';

describe('MainCarDetailsComponent', () => {
  let component: MainCarDetailsComponent;
  let fixture: ComponentFixture<MainCarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCarDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
