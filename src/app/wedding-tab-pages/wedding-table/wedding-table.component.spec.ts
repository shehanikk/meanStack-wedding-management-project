import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingTableComponent } from './wedding-table.component';

describe('WeddingTableComponent', () => {
  let component: WeddingTableComponent;
  let fixture: ComponentFixture<WeddingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
