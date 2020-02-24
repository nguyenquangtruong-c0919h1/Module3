import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HopdongEditComponent } from './hopdong-edit.component';

describe('HopdongEditComponent', () => {
  let component: HopdongEditComponent;
  let fixture: ComponentFixture<HopdongEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopdongEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HopdongEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
