import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDjComponent } from './party-dj.component';

describe('PartyDjComponent', () => {
  let component: PartyDjComponent;
  let fixture: ComponentFixture<PartyDjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyDjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyDjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
