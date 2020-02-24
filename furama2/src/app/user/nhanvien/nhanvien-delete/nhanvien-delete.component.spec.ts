import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienDeleteComponent } from './nhanvien-delete.component';

describe('NhanvienDeleteComponent', () => {
  let component: NhanvienDeleteComponent;
  let fixture: ComponentFixture<NhanvienDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhanvienDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhanvienDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
