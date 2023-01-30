import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingCarsComponent } from './wedding-cars.component';

describe('WeddingCarsComponent', () => {
  let component: WeddingCarsComponent;
  let fixture: ComponentFixture<WeddingCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingCarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
