import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInforComponent } from './client-infor.component';

describe('ClientInforComponent', () => {
  let component: ClientInforComponent;
  let fixture: ComponentFixture<ClientInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientInforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
