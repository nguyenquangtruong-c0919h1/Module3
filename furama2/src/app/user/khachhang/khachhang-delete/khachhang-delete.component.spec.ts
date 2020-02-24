import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangDeleteComponent } from './khachhang-delete.component';

describe('KhachhangDeleteComponent', () => {
  let component: KhachhangDeleteComponent;
  let fixture: ComponentFixture<KhachhangDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachhangDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachhangDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
