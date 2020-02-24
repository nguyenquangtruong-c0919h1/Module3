import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkhachhangComponent } from './addkhachhang.component';

describe('AddkhachhangComponent', () => {
  let component: AddkhachhangComponent;
  let fixture: ComponentFixture<AddkhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
