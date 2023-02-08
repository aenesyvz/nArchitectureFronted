import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindeksCreditScoreComponent } from './findeks-credit-score.component';

describe('FindeksCreditScoreComponent', () => {
  let component: FindeksCreditScoreComponent;
  let fixture: ComponentFixture<FindeksCreditScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindeksCreditScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindeksCreditScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
