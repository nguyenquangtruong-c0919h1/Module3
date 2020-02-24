import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangEditComponent } from './khachhang-edit.component';

describe('KhachhangEditComponent', () => {
  let component: KhachhangEditComponent;
  let fixture: ComponentFixture<KhachhangEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhachhangEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachhangEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
