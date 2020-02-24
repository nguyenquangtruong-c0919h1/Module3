import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvuDeleteComponent } from './dichvu-delete.component';

describe('DichvuDeleteComponent', () => {
  let component: DichvuDeleteComponent;
  let fixture: ComponentFixture<DichvuDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DichvuDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DichvuDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
