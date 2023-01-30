import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceMusicalComponent } from './dance-musical.component';

describe('DanceMusicalComponent', () => {
  let component: DanceMusicalComponent;
  let fixture: ComponentFixture<DanceMusicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanceMusicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanceMusicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
