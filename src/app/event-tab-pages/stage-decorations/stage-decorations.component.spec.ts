import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageDecorationsComponent } from './stage-decorations.component';

describe('StageDecorationsComponent', () => {
  let component: StageDecorationsComponent;
  let fixture: ComponentFixture<StageDecorationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageDecorationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageDecorationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
