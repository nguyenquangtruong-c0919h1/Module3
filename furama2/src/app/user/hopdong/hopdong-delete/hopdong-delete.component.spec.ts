import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopdongDeleteComponent } from './hopdong-delete.component';

describe('HopdongDeleteComponent', () => {
  let component: HopdongDeleteComponent;
  let fixture: ComponentFixture<HopdongDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopdongDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopdongDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
