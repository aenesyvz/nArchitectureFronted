import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDamageComponent } from './car-damage.component';

describe('CarDamageComponent', () => {
  let component: CarDamageComponent;
  let fixture: ComponentFixture<CarDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDamageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
